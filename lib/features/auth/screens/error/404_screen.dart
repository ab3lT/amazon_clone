import 'package:flutter/material.dart';

class Error404 extends StatefulWidget {
  static const String routeName = "/error-screen";
  const Error404({Key? key}) : super(key: key);

  @override
  State<Error404> createState() => _Error404State();
}

class _Error404State extends State<Error404> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Page Not Found')),
      body: Center(child: Text("Page Not Found")),
    );
  }
}
