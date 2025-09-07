import 'package:flutter/material.dart';
// 41
void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  ThemeMode _themeMode = ThemeMode.dark;

  void _toggleTheme() {
    setState(() {
      _themeMode = _themeMode == ThemeMode.dark
          ? ThemeMode.light
          : ThemeMode.dark;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter super-turbo-appp',

      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.deepPurple,
          brightness: Brightness.light,
        ),
        useMaterial3: true,
      ),
      darkTheme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.deepPurple,
          brightness: Brightness.dark,
          primary: Colors.deepOrange,
        ),
        useMaterial3: true,
      ),

      themeMode: _themeMode,

      home: MyHomePage(
        title: 'MAinPAge -____ ',
        onThemeModePressed: _toggleTheme,
        currentThemeMode: _themeMode,
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({
    super.key,
    required this.title,

    required this.onThemeModePressed,
    required this.currentThemeMode,
  });

  final String title;
  final VoidCallback onThemeModePressed;
  final ThemeMode currentThemeMode;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
        actions: [
          Switch(
            value: widget.currentThemeMode == ThemeMode.dark,
            onChanged: (value) {
              widget.onThemeModePressed();
            },

            thumbIcon: WidgetStateProperty.resolveWith<Icon?>((
              Set<WidgetState> states,
            ) {
              if (states.contains(WidgetState.selected)) {
                return const Icon(Icons.dark_mode);
              }
              return const Icon(Icons.light_mode);
            }),
          ),
        ],
        leading: Icon(Icons.accessibility_new_outlined),
      ),
      body: SingleChildScrollView(
        // Center vidget
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            ListTile(
              leading: Icon(Icons.join_full),
              tileColor: Colors.blueAccent,
              title: Text('-to-jest-tekst-listy'),
              trailing: Text('lore,-ipsum'),
              onTap: () {
                print('klikniete-menu');
              },
            ),
            Container(
              height: 200.0,
              width: double.infinity,
              padding: EdgeInsets.all(15),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(5),
                color: Colors.yellow,
              ),
              child: Container(
                height: 200.0,
                width: double.infinity,
                padding: EdgeInsets.all(15),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(5),
                  color: Colors.cyanAccent,
                ),
                child: Text(
                  'text-from-container____________',
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.primary,
                  ),
                ),
              ),
            ),
            Container(
              height: 200.0,
              width: double.infinity,
              padding: EdgeInsets.all(15),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(5),
                color: Colors.yellow,
              ),
              child: Container(
                height: 200.0,
                width: double.infinity,
                padding: EdgeInsets.all(15),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(5),
                  color: Colors.cyanAccent,
                ),
                child: Text(
                  'text-from-container____________',
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.primary,
                  ),
                ),
              ),
            ),
            // Image.network(
            //   'https://www.termedia.pl/f/pages/61477_1a7e25d6a94421902f783b751e4cbd36_blog.jpg',
            // )
            Stack(
              children: [
                Opacity(
                  opacity: 0.5, // Ustawienie przezroczystości na 50%
                  child: Image.asset(
                    'assets/images/background.png',
                    fit: BoxFit.cover,
                    width: double.infinity,
                  ),
                ),
                Center(
                  child: Text(
                    'Tekst na obrazku',
                    style: TextStyle(
                      fontSize: 32,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
