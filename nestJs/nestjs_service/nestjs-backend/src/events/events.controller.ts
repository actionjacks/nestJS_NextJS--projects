import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
  HttpCode,
  Logger,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendee } from './attendee.entity';
import { CreateEventDto } from './input/create-event.dto';
import { Event } from './event.entity';
import { EventsService } from './events.service';
import { UpdateEventDto } from './input/update-event.dto';
import { ListEvents } from './input/list.events';

@Controller('/events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name);

  //use Repository to access your DB find update add etc.

  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
    //multi attendee Relations
    @InjectRepository(Attendee)
    private readonly attendeeRepository: Repository<Attendee>,
    private readonly eventsService: EventsService,
  ) {}

  @Get()
  async findAll(@Query() filter: ListEvents) {
    //logger help debug check requests
    this.logger.log(`Hit the findAll route`);

    const events = await this.eventsService.getEventsWithAttendeeCountFiltered(
      filter,
    );
    this.logger.debug(`Found ${events.length} events`);

    return events;
  }
  //for test
  @Get('/practice')
  async practice() {
    return await this.repository.find({
      where: { id: 1 },
    });
  }
  @Get('/practice2')
  async practice2() {
    // return await this.repository.findOne(1, {
    //   //show all relations to this entity
    //   relations: ['attendees'],
    // });

    //multi atendee
    const event = await this.repository.findOne(1, {
      relations: ['attendees'],
    });

    const attendee = new Attendee();
    attendee.name = 'uusing cascade';
    // attendee.event = event;

    event.attendees.push(attendee);

    // await this.attendeeRepository.save(attendee);
    await this.repository.save(event);
    return event;
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    const event = await this.eventsService.getEvent(id);

    if (!event) {
      throw new NotFoundException();
    }

    return event;
  }

  @Post()
  async create(@Body() input: CreateEventDto) {
    return await this.repository.save({
      ...input,
      when: new Date(input.when),
    });
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() input: UpdateEventDto) {
    const event = await this.repository.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }

    return await this.repository.save({
      ...event,
      ...input,
      when: input.when ? new Date(input.when) : event.when,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const event = await this.repository.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }

    await this.repository.remove(event);
  }
}
