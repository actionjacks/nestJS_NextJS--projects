interface Candidate {
  name: string;
  age: number;
  email: string;
}
interface Validator {
  isValid(candidate: Candidate): boolean;
}

class EmailValidator implements Validator {
  isValid({ email }: Candidate): boolean {
    return email === "actionJacks@o2.pl";
  }
}
class AgeValidator implements Validator {
  isValid({ name }: Candidate): boolean {
    return name === "kek";
  }
}
function validatorCandidate(candidate: Candidate) {
  const validators: Validator[] = [new EmailValidator(), new AgeValidator()];
  const validCandidate = validators.every((validation) =>
    validation.isValid(candidate)
  );
}
