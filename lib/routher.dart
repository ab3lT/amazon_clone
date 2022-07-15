import 'package:amazon_clone/features/auth/screens/auth_screen.dart';
import 'package:flutter/material.dart';

import 'features/auth/screens/error/404_screen.dart';

Route<dynamic> generateRoute(RouteSettings routeSettings) {
  switch (routeSettings.name) {
    case AuthScreen.routeName:
      return MaterialPageRoute(
        builder: (_) => AuthScreen(),
      );
    default:
      return MaterialPageRoute(builder: (_) => const Error404());
  }
}
