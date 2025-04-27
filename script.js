function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./Frames/male0001.png
     ./Frames/male0002.png
     ./Frames/male0003.png
     ./Frames/male0004.png
     ./Frames/male0005.png
     ./Frames/male0006.png
     ./Frames/male0007.png
     ./Frames/male0008.png
     ./Frames/male0009.png
     ./Frames/male0010.png
     ./Frames/male0011.png
     ./Frames/male0012.png
     ./Frames/male0013.png
     ./Frames/male0014.png
     ./Frames/male0015.png
     ./Frames/male0016.png
     ./Frames/male0017.png
     ./Frames/male0018.png
     ./Frames/male0019.png
     ./Frames/male0020.png
     ./Frames/male0021.png
     ./Frames/male0022.png
     ./Frames/male0023.png
     ./Frames/male0024.png
     ./Frames/male0025.png
     ./Frames/male0026.png
     ./Frames/male0027.png
     ./Frames/male0028.png
     ./Frames/male0029.png
     ./Frames/male0030.png
     ./Frames/male0031.png
     ./Frames/male0032.png
     ./Frames/male0033.png
     ./Frames/male0034.png
     ./Frames/male0035.png
     ./Frames/male0036.png
     ./Frames/male0037.png
     ./Frames/male0038.png
     ./Frames/male0039.png
     ./Frames/male0040.png
     ./Frames/male0041.png
     ./Frames/male0042.png
     ./Frames/male0043.png
     ./Frames/male0044.png
     ./Frames/male0045.png
     ./Frames/male0046.png
     ./Frames/male0047.png
     ./Frames/male0048.png
     ./Frames/male0049.png
     ./Frames/male0050.png
     ./Frames/male0051.png
     ./Frames/male0052.png
     ./Frames/male0053.png
     ./Frames/male0054.png
     ./Frames/male0055.png
     ./Frames/male0056.png
     ./Frames/male0057.png
     ./Frames/male0058.png
     ./Frames/male0059.png
     ./Frames/male0060.png
     ./Frames/male0061.png
     ./Frames/male0062.png
     ./Frames/male0063.png
     ./Frames/male0064.png
     ./Frames/male0065.png
     ./Frames/male0066.png
     ./Frames/male0067.png
     ./Frames/male0068.png
     ./Frames/male0069.png
     ./Frames/male0070.png
     ./Frames/male0071.png
     ./Frames/male0072.png
     ./Frames/male0073.png
     ./Frames/male0074.png
     ./Frames/male0075.png
     ./Frames/male0076.png
     ./Frames/male0077.png
     ./Frames/male0078.png
     ./Frames/male0079.png
     ./Frames/male0080.png
     ./Frames/male0081.png
     ./Frames/male0082.png
     ./Frames/male0083.png
     ./Frames/male0084.png
     ./Frames/male0085.png
     ./Frames/male0086.png
     ./Frames/male0087.png
     ./Frames/male0088.png
     ./Frames/male0089.png
     ./Frames/male0090.png
     ./Frames/male0091.png
     ./Frames/male0092.png
     ./Frames/male0093.png
     ./Frames/male0094.png
     ./Frames/male0095.png
     ./Frames/male0096.png
     ./Frames/male0097.png
     ./Frames/male0098.png
     ./Frames/male0099.png
     ./Frames/male0100.png
     ./Frames/male0101.png
     ./Frames/male0102.png
     ./Frames/male0103.png
     ./Frames/male0104.png
     ./Frames/male0105.png
     ./Frames/male0106.png
     ./Frames/male0107.png
     ./Frames/male0108.png
     ./Frames/male0109.png
     ./Frames/male0110.png
     ./Frames/male0111.png
     ./Frames/male0112.png
     ./Frames/male0113.png
     ./Frames/male0114.png
     ./Frames/male0115.png
     ./Frames/male0116.png
     ./Frames/male0117.png
     ./Frames/male0118.png
     ./Frames/male0119.png
     ./Frames/male0120.png
     ./Frames/male0121.png
     ./Frames/male0122.png
     ./Frames/male0123.png
     ./Frames/male0124.png
     ./Frames/male0125.png
     ./Frames/male0126.png
     ./Frames/male0127.png
     ./Frames/male0128.png
     ./Frames/male0129.png
     ./Frames/male0130.png
     ./Frames/male0131.png
     ./Frames/male0132.png
     ./Frames/male0133.png
     ./Frames/male0134.png
     ./Frames/male0135.png
     ./Frames/male0136.png
     ./Frames/male0137.png
     ./Frames/male0138.png
     ./Frames/male0139.png
     ./Frames/male0140.png
     ./Frames/male0141.png
     ./Frames/male0142.png
     ./Frames/male0143.png
     ./Frames/male0144.png
     ./Frames/male0145.png
     ./Frames/male0146.png
     ./Frames/male0147.png
     ./Frames/male0148.png
     ./Frames/male0149.png
     ./Frames/male0150.png
     ./Frames/male0151.png
     ./Frames/male0152.png
     ./Frames/male0153.png
     ./Frames/male0154.png
     ./Frames/male0155.png
     ./Frames/male0156.png
     ./Frames/male0157.png
     ./Frames/male0158.png
     ./Frames/male0159.png
     ./Frames/male0160.png
     ./Frames/male0161.png
     ./Frames/male0162.png
     ./Frames/male0163.png
     ./Frames/male0164.png
     ./Frames/male0165.png
     ./Frames/male0166.png
     ./Frames/male0167.png
     ./Frames/male0168.png
     ./Frames/male0169.png
     ./Frames/male0170.png
     ./Frames/male0171.png
     ./Frames/male0172.png
     ./Frames/male0173.png
     ./Frames/male0174.png
     ./Frames/male0175.png
     ./Frames/male0176.png
     ./Frames/male0177.png
     ./Frames/male0178.png
     ./Frames/male0179.png
     ./Frames/male0180.png
     ./Frames/male0181.png
     ./Frames/male0182.png
     ./Frames/male0183.png
     ./Frames/male0184.png
     ./Frames/male0185.png
     ./Frames/male0186.png
     ./Frames/male0187.png
     ./Frames/male0188.png
     ./Frames/male0189.png
     ./Frames/male0190.png
     ./Frames/male0191.png
     ./Frames/male0192.png
     ./Frames/male0193.png
     ./Frames/male0194.png
     ./Frames/male0195.png
     ./Frames/male0196.png
     ./Frames/male0197.png
     ./Frames/male0198.png
     ./Frames/male0199.png
     ./Frames/male0200.png
     ./Frames/male0201.png
     ./Frames/male0202.png
     ./Frames/male0203.png
     ./Frames/male0204.png
     ./Frames/male0205.png
     ./Frames/male0206.png
     ./Frames/male0207.png
     ./Frames/male0208.png
     ./Frames/male0209.png
     ./Frames/male0210.png
     ./Frames/male0211.png
     ./Frames/male0212.png
     ./Frames/male0213.png
     ./Frames/male0214.png
     ./Frames/male0215.png
     ./Frames/male0216.png
     ./Frames/male0217.png
     ./Frames/male0218.png
     ./Frames/male0219.png
     ./Frames/male0220.png
     ./Frames/male0221.png
     ./Frames/male0222.png
     ./Frames/male0223.png
     ./Frames/male0224.png
     ./Frames/male0225.png
     ./Frames/male0226.png
     ./Frames/male0227.png
     ./Frames/male0228.png
     ./Frames/male0229.png
     ./Frames/male0230.png
     ./Frames/male0231.png
     ./Frames/male0232.png
     ./Frames/male0233.png
     ./Frames/male0234.png
     ./Frames/male0235.png
     ./Frames/male0236.png
     ./Frames/male0237.png
     ./Frames/male0238.png
     ./Frames/male0239.png
     ./Frames/male0240.png
     ./Frames/male0241.png
     ./Frames/male0242.png
     ./Frames/male0243.png
     ./Frames/male0244.png
     ./Frames/male0245.png
     ./Frames/male0246.png
     ./Frames/male0247.png
     ./Frames/male0248.png
     ./Frames/male0249.png
     ./Frames/male0250.png
     ./Frames/male0251.png
     ./Frames/male0252.png
     ./Frames/male0253.png
     ./Frames/male0254.png
     ./Frames/male0255.png
     ./Frames/male0256.png
     ./Frames/male0257.png
     ./Frames/male0258.png
     ./Frames/male0259.png
     ./Frames/male0260.png
     ./Frames/male0261.png
     ./Frames/male0262.png
     ./Frames/male0263.png
     ./Frames/male0264.png
     ./Frames/male0265.png
     ./Frames/male0266.png
     ./Frames/male0267.png
     ./Frames/male0268.png
     ./Frames/male0269.png
     ./Frames/male0270.png
     ./Frames/male0271.png
     ./Frames/male0272.png
     ./Frames/male0273.png
     ./Frames/male0274.png
     ./Frames/male0275.png
     ./Frames/male0276.png
     ./Frames/male0277.png
     ./Frames/male0278.png
     ./Frames/male0279.png
     ./Frames/male0280.png
     ./Frames/male0281.png
     ./Frames/male0282.png
     ./Frames/male0283.png
     ./Frames/male0284.png
     ./Frames/male0285.png
     ./Frames/male0286.png
     ./Frames/male0287.png
     ./Frames/male0288.png
     ./Frames/male0289.png
     ./Frames/male0290.png
     ./Frames/male0291.png
     ./Frames/male0292.png
     ./Frames/male0293.png
     ./Frames/male0294.png
     ./Frames/male0295.png
     ./Frames/male0296.png
     ./Frames/male0297.png
     ./Frames/male0298.png
     ./Frames/male0299.png
     ./Frames/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);

  // Set different scale factor based on screen width
  var scaleFactor = window.innerWidth <= 768 ? 0.7 : 1;
  ratio = ratio * scaleFactor;

  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;

  var offsetX = 0;
  // Adjust offsetY for smaller screens
  var offsetY = window.innerWidth <= 768 ? 140 : 0;
  
  centerShift_x += offsetX;
  centerShift_y += offsetY;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

