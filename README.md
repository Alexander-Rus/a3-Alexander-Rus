

## a3-Alexander-Rus

https://a3-alexander-rus.glitch.me/

The goal of this application is to build a music web app that allows users to create an acount, login, add songs to their account, delete songs, and modify songs.

The challenges I faced mostly invovled the passing of information. Getting passport to work correctly locally, and keeping all of the data stored in the database using lowdb. There were more than a few times when the data would not be passed correctly, and it was difficult to keep track of it all. I used a plethora of online resources to help me, the most helpful tutorials I saw were:
https://www.youtube.com/watch?v=-lRgL9kj_h0
https://www.youtube.com/watch?v=Iu2bIg8fvTw
https://www.youtube.com/watch?v=6oiabY1xpBo

For authentication I used the local strategy for passport. I considered using Oauth, but I did not have enough time to figue it out. I additionally used express validator to validate logins as well. For the database, I used both lowdb and express-nedb-session. Lowdb was one of the easier options to get working, and nedb-sessions is used to create persistant memory when working with the sessions.

The CSS framework that I used was Bootstrap 4. I used it because it is very popular and therefore has a large community updating it and providing good tutorials. I used it primartily on buttons, drop down options, and creating cards that are formatted nicely. There were times when I wanted to tweak the styling, so I would typically do inline styles for that. 

The middleware packages that I used were:
1. Passport (counts as one according to the assignment description) - Used to authenticate.
2. Express-session - Used to remember which user is logged in at a given time
3. express-validator - Used to validate the login given the password and username
4. express-ejs-layouts - Used to work with the ejs files. which are written with a combination of HTML and javascript
5. passport-local  - Used to create the local instance of the passport authentication
6. bcyptjs - Used to encrypt the password so that you cannot simply go into the database and look at people's passwords
7. body-parser - Used to parse the json
8. Bootstrap - Might not be nessessary as a middleware, but I had it anyway, used for css styling
9. connect-flash - Used to create flash messages that pop up when a user logs in sucessfully, or is missing a value when trying to login
10. cookie-parser - Used to parse the cookie data which was used for the passport
11. uuid - Used to generate random ids for the songs that were created and the users that were created, that way they can be found in the database.
12. Express - Used to Create the server


## Technical Achievements
- **Tech Achievement 1**: Filled all base requirements of the assignment : 
1. Create a server using express
2. Have a results functionality that shows the entire dataset residing in the server's memory (That is the All Songs part)
3. Have a form/entry mechanic that allows addition, deletion, and modification
4. Use passport authentication
5. Keep persistant data using Lowdb
6. Use a CSS template
7. Have HTML tags and form fields of various flavors
8. Display data for a particulr authenticated user
9. Fetch data using javascript

- **Tech Achievement 2**: I used password encryption with bcrypt middleware
- **Tech Achievement 3**:I used uuid to generate random keys for each of the songs that were created.
- **Tech Achievement 3**:I used express validator to validate the login
- **Tech Achievement 3**:I used express-nedb-session to store and keep track of session information. 
- **Tech Achievement 4**: I used flash messages to create interactive popups
- **Tech Achievement 5**:I restricted page acess depending on whether a user is logged in or not
- **Tech Achievement 6**:I created multiple different pages including a home page, a login, profile page, create account, music page, and song page.

### Design/Evaluation Achievements
- **Design Achievement 1**: I used ejs formatt instead of html files for this assingment. (I had to additionally use express-ejs-layouts for this.)
- **Design Achievement 2**: I used best practices when writing HTML. I used header tags properly, I included alt tags, and I sized indivual elements.
- **Design Achievement 3**: I used the bootstrap css framework, specificall jumbotron to give my webpage a unique design.
- **Design Achievement 4**: I created drop colapsable buttons that provide more fields when clicked on.
- **Design Achievement 5**: I created drop colapsable buttons that provide more fields when clicked on.

