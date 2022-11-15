$(document).ready(function(){
    var $match = [
        ["t-8-308603_640x480.jpg", "Summer Wheat", "2019.06.14"],
        ["t-17-247234_640x480.jpg", "Young Woman", "2019.10.07"],
        ["shutterstock_56785618-132726_640x480.jpg", "Spiral Staircase", "2019.10.13"],
        ["t3-9-289799_640x480.jpg", "Arena Vivian", "2020.04.05"],
        ["t-21-545213_640x480.jpg", "Masked Model", "2020.04.30"],
        ["t-7-360109_640x480.jpg", "Birds of Beauty", "2020.05.04"],
        ["t3-8-321596_640x480.jpg", "Emphasis Lafuta", "2020.07.07"],
        ["t-3-325075_640x480.jpg", "Purple Haze", "2020.07.29"],
        ["t-1-213373_640x480.jpg", "Make a Whish", "2020.08.19"],
        ["shutterstock_58264459-111274_640x480.jpg", "Before the Storm", "2020.12.24"],
        ["t-5-236106_640x480.jpg", "Lonely Ladybug", "2021.01.16"],
        ["t-13-584189_640x480.jpg", "A Loving Couple", "2021.02.21"],
        ["t-19-373493_640x480.jpg", "Monk Walks", "2021.03.12"],
        ["t-9-340072_640x480.jpg", "Before the Storm", "2021.03.17"],
    ];
    for(v of $match){
        $("section").append(`
        <article style="background-image: url(./img/${v[0]});">
            <div class="centerBox">
                <div class="cont">
                    <h4>${v[1]}</h4>
                    <div class="day">${v[2]}</div>
                    <div class="line"></div>
                    <div class="zoom"></div>
                </div>
            </div>
        </article>
        `);
    }
})






