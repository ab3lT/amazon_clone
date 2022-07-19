import 'package:amazon_clone/models/user.dart';
import 'package:http/http.dart ' as http;

import '../../../constants/global_variables.dart';

class AuthService {
  // sign up user
  void singUpUser({
    required String email,
    required String password,
    required String name,
  }) async {
    try {
      User user = User(
        id: '',
        name: name,
        email: email,
        password: password,
        address: '',
        type: '',
        token: '',
        cart: [],
      );

      http.Response res = await http.post(Uri.parse('$uri/api/signup'),
          body: user.toJson(),
          headers: <String, String>{
            'Content-Type': 'application.json; charset=UTF-8',
          });
      print(res.body);
      print(res.statusCode);
    } catch (e) {}
  }
}
