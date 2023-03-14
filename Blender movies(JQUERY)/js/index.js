const videoobj = [
    {
        "videoUrl": "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
        "title": "Sintel",
        "description": "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
        "comments": [
            {
                "name": "Micheal Scott",
                "image": "../images/reviewers/micheal.png",
                "comment": "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes."
            },
            {
                "name": "Dwight K Schrute (Asst. to the Regional Manager)",
                "image": "../images/reviewers/dwight.png",
                "comment": "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!"
            },
            {
                "name": "Jim Halpert",
                "image": "../images/reviewers/jim.png",
                "comment": "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation."
            },
            {
                "name": "Pam Beesly Halpert",
                "image": "../images/reviewers/pam.png",
                "comment": "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me."
            },
            {
                "name": "Angela Martin",
                "image": "../images/reviewers/angela.png",
                "comment": "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces."
            },
            {
                "name": "Kevin Malone",
                "image": "../images/reviewers/kevin.png",
                "comment": "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win."
            },
            {
                "name": "Andy Bernard",
                "image": "../images/reviewers/andy.png",
                "comment": "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this."
            }
        ]


    }
]


let container = $("#container");
let main = $("#main-container");

$.each(videoobj, function(temp) {
  // videos
  let card = $("<div>").addClass("card");
  let video = $("<video>").addClass("video");
  let div_video = $("<div>").addClass("div_video");
  video.attr("src", videoobj[temp].videoUrl);
  video.attr("controls", "controls");
  div_video.append(video);
  video.attr("poster","../images/bg.jpg");
  card.append(div_video);

  // content
  let title = $("<div>").addClass("content-title").html(videoobj[temp].title);
  let description = $("<div>").addClass("description").html(videoobj[temp].description);
  card.append(title);
  card.append(description);
  container.append(card);
});

let comments_container = $("#comments-container");
let comments = videoobj[0].comments; // Get the comments array from the first video object
$.each(comments, function(i) {
  let card_comments = $("<div>").addClass("card-comments");
  let name = $("<p>").addClass("comment-name").html(comments[i].name);
  let com = $("<p>").addClass("com").html(comments[i].comment);
  let image = $("<img>").addClass("image").attr("src", comments[i].image);
  let div_card = $("<div>").addClass("div_card");
  div_card.append(name);
  div_card.append(com);
  card_comments.append(image);
  card_comments.append(div_card);
  comments_container.append(card_comments);
});

container.append(comments_container);

const products = [
  {
    "imageUrl": "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
    "title": "Sprite Fright"
  },
  {
    "imageUrl": "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
    "title": "Agent 327"
  },
  {
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
    "title": "Spring"
  }
];

let image_container = $("#image-container");
$.each(products, function(temp) {
  let div_image = $("<div>").addClass("div_image");
  let products_images = $("<img>").addClass("products_image").attr("src", products[temp].imageUrl);
  div_image.append(products_images);
  image_container.append(div_image);
});
