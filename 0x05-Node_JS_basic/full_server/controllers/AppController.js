/**
 * Contains the miscellaneous route handlers.
 * @author Alan Tiren <https://github.com/alantiren>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
