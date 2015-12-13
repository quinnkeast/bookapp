/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

import sqldb from '../sqldb';

var Thing = sqldb.Thing;
var Book = sqldb.Book;
var User = sqldb.User;
var Genre = sqldb.Genre;
var Author = sqldb.Author;

Thing.sync({
  force: true
})
  .then(function() {
    return Thing.destroy({ where: {} });
  })
  .then(function() {
    Thing.bulkCreate([{
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    }, {
      name: 'Personal test',
      info: 'Giving it the what for.'
    }])
    .then(function() {
      console.log('Finished populating things');
    })
    .catch(e => console.log('Error occurred in populating things: ' + e));
    // This is to avoid a warning – should be fixed soon.
    // https://github.com/sequelize/sequelize/issues/4883
    return null;
  });

Genre.sync({
  force: true
})
  .then(function() {
    return Genre.destroy({ where: {} });
  })
  .then(function() {
    Genre.bulkCreate([{
      name: 'Science Fiction'
    }, {
      name: 'Fantasy'
    }, {
      name: 'Adventure'
    }, {
      name: 'Historical'
    }])
    .then(function() {
      console.log('Finished populating genres');
    })
    .catch(e => console.log('Error occurred in populating genres: ' + e));
    // This is to avoid a warning – should be fixed soon.
    // https://github.com/sequelize/sequelize/issues/4883
    return null;
  });

Author.sync({
  force: true
})
  .then(function() {
    return Author.destroy({ where: {} });
  })
  .then(function() {
    Author.bulkCreate([{
      name: 'J. K. Rowling'
    }, {
      name: 'Jon Scalzi'
    }, {
      name: 'J. R. R. Tolkien'
    }, {
      name: 'Neil Gaiman'
    }])
    .then(function() {
      console.log('Finished populating authors');
    })
    .catch(e => console.log('Error occurred in populating authors: ' + e));
    // This is to avoid a warning – should be fixed soon.
    // https://github.com/sequelize/sequelize/issues/4883
    return null;
  });

Book.sync({
  force: true
})
  .then(function() {
    return Book.destroy({ where: {} });
  })
  .then(function() {
    Book.bulkCreate([{
      title: 'Harry Potter and the Chamber of Secrets',
      description: 'In Harry Potter and the Chamber of Secrets, the summer after Harry’s first year at Hogwarts has been his worst summer ever… the Dursleys more distant and horrible than ever before. But just as he’s packing his bags to return to school, a creature named Dobby the house-elf announces that if Harry goes back to Hogwarts, disaster will strike. And it turns out, Dobby is right. Harry and Ron miss the Hogwarts Express, so they fly to school in a blue Ford Anglia, crash landing in the notorious Whomping Willow. Soon other worries accumulate: the outrageously stuck-up new professor Gilderoy Lockhart; a ghost named Moaning Myrtle, who haunts the girls\' bathroom; the strange behavior of Ron\'s little sister, Ginny Weasley; rumors about the \"Chamber of Secrets,\" a cavern buried deep below Hogwarts; and a magical diary owned by Tom Riddle, a Hogwarts student of long ago. Harry is also shocked to discover that he can speak Parseltongue, the language of snakes - a rare ability that Lord Voldemort also possessed - and that anti-Muggle prejudice exists in the Wizarding world, even affecting Harry\'s friend Hermione. But all of these seem like minor concerns when someone starts turning Hogwarts students to stone: an evildoer said to be the fearsome Heir of Salazar Slytherin, on of the founders of the school. Could it be Draco Malfoy, Harry\'s most poisonous rival? Could it be Hagrid whose mysterious past is finally told? Or could it be the one person everyone at Hogwarts most suspects: Harry Potter himself?',
      language: 'en'
    }, {
      title: 'Harry Potter and the Goblet of Fire',
      description: 'Young wizard-in-training Harry Potter prepares for a competition between Hogwarts School of Magic and two rival schools, develops a crush on Cho Chang, and wishes above all to be a normal fourteen-year-old. Reprint.',
      language: 'en'
    }, {
      title: 'The Hobbit',
      description: 'Now a major motion picture A great modern classic and the prelude to THE LORD OF THE RINGS Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum. “A glorious account of a magnificent adventure, filled with suspense and seasoned with a quiet humor that is irresistible . . . All those, young or old, who love a fine adventurous tale, beautifully told, will take The Hobbit to their hearts.” – New York Times Book Review',
      language: 'en'
    }, {
      title: 'The End of All Things',
      description: 'Hugo-award winning author, John Scalzi returns to his best-selling Old Man\'s War universe with The End of All Things, the direct sequel to 2013\'s The Human Division Humans expanded into space...only to find a universe populated with multiple alien species bent on their destruction. Thus was the Colonial Union formed, to help protect us from a hostile universe. The Colonial Union used the Earth and its excess population for colonists and soldiers. It was a good arrangement...for the Colonial Union. Then the Earth said: no more. Now the Colonial Union is living on borrowed time-a couple of decades at most, before the ranks of the Colonial Defense Forces are depleted and the struggling human colonies are vulnerable to the alien species who have been waiting for the first sign of weakness, to drive humanity to ruin. And there\'s another problem: A group, lurking in the darkness of space, playing human and alien against each other-and against their own kind -for their own unknown reasons. In this collapsing universe, CDF Lieutenant Harry Wilson and the Colonial Union diplomats he works with race against the clock to discover who is behind attacks on the Union and on alien races, to seek peace with a suspicious, angry Earth, and keep humanity\'s union intact...or else risk oblivion, and extinction-and the end of all things',
      language: 'en'
    }])
    .then(function() {
      console.log('Finished populating books');
    })
    .then(function() {
      Book.find({where: {title: 'Harry Potter and the Chamber of Secrets'}})
        .then(function(book) {
          Author.find({where: {name: 'J. K. Rowling'}})
            .then(function(author) {
              book.addAuthor(author);
              console.log('Updated book with author');
            })
            .catch(e => console.log('err in finding author: ' + e));
            // This is to avoid a warning – should be fixed soon.
            // https://github.com/sequelize/sequelize/issues/4883
            return null;
        })
        .catch(e => console.log('err in finding book: ' + e));
        // This is to avoid a warning – should be fixed soon.
        // https://github.com/sequelize/sequelize/issues/4883
        return null;
    })
    .catch(e => console.log('Error occurred in populating books: ' + e));    
    // This is to avoid a warning – should be fixed soon.
    // https://github.com/sequelize/sequelize/issues/4883
    return null;
  });

User.sync()
  .then(function() {
    return User.destroy({ where: {} });
  })
  .then(function() {
    User.bulkCreate([{
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }])
    .then(function() {
      console.log('Finished populating users');
    })
    .catch(e => console.log('Error occurred in populating users: ' + e));
    // This is to avoid a warning – should be fixed soon.
    // https://github.com/sequelize/sequelize/issues/4883
    return null;
  });
