

## a3-Alexander-Rus

https://a3-alexander-rus.glitch.me/ //Doesn't Work reliably

This Webpage is a music app, that is intened to allow users to create an account, login, add songs, delete songs, and modify songs. 

This Webpage sucessfully creates a server using Express. In order for the functionallity to work correctly, it also uses express-ejs-layouts, express-session, and express-validator.

For the database, I used lowdb. Lowdb stores the data in  a json file called db.json. It keeps track of users and songs that have been added.

I used a number of middleware packages inorder to get this project working. The additional packages I used were bcryptjs, body-parser, connect-flash, connect-nedb-session, dotenv, ejs, passport, passport-local, and uuid. A lot of the packages were used to create cookies and session that could be saved using connect-nedb-session. I had a lot of trouble getting the passport to work properly so I used some online resources to help such as:
https://www.youtube.com/watch?v=-lRgL9kj_h0
https://www.youtube.com/watch?v=Iu2bIg8fvTw
https://www.youtube.com/watch?v=6oiabY1xpBo

For some reason when running the code using node.js locally, the projet works fine(assuming all the packages are installed). For some reason, the glitch projet does not seem to want to work consistantly.

## Technical Achievements
- **Tech Achievement 1**: Fills all base requirements of maintaining a server that allows a user to log in and out, add, delete, and modify songs. Uses passport to authenticate
- **Tech Achievement 2**: I used connect-flash to show messages when user has logged in, logged out, or made an invalid entry.
- **Tech Achievement 3**: I used connect-nedb-session to keep track of sessions using git.
- **Tech Achievement 4**:I used uuid to generate random keys for each of the songs that were created.
- **Tech Achievement 5**: I used ejs as the layouts for the pages instead of 

### Design/Evaluation Achievements
- **Design Achievement 1**: I used ejs formatt instead of html files for this assingment. (I had to additionally use express-ejs-layouts for this.)
- **Design Achievement 2**: I used best practices when writing HTML. I used header tags properly, i included alt tags, and I sized indivual elements.
- **Design Achievement 3**: I used the bootstrap css framework, specificall jumbotron to give my webpage a unique design.

