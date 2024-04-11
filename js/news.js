// newsView누르면 나오는 뉴스
$(document).ready(function () {
  $(".newsView").click(function () {
    $(".btn").hide();

    $(".hiddenNews").fadeIn("slow").css("display", "block");

    $(".hiddenNews").toggleClass("active");
  });

  $("#newsClose").click(function () {
    $(".hiddenNews").fadeOut("slow").css("display", "none");

    $(".btn").show();
  });

  // 각각의 View detail 버튼 클릭 시 item-slider's img = hiddenNews's img

  $(".newsView").click(function () {
    var imageUrl = $(this).closest(".item-slider").find("img").attr("src"); // 클릭한 버튼이 속한 item-slider에 있는 이미지의 경로를 가져옵니다.
    $("#change_newsImg").attr("src", imageUrl); // 이미지의 src 속성을 변경하여 이미지를 업데이트합니다.
  });
});

// hidden News의 컨탠츠 내용 바꾸기

document.addEventListener("DOMContentLoaded", function () {
  let viewBtns = document.querySelectorAll(".newsView");
  let hiddenNews = document.querySelector(".hiddenNews");

  let contents = [
    // 1
    {
      title: "아우디, EA 스포츠 포뮬러1 (F1) 게임에 등장",
      paragraphs: [
        "- 아우디 포뮬러 1 (F1) 쇼카, EA 스포츠 ‘F1® 22’ 레이싱 게임에서 디지털로 구현",
        "- 플레이스테이션, Xbox와 PC로 플레이 가능",
        "- 아우디 브랜드 총괄 헨릭 벤더스, “아우디 포뮬러 1 쇼카가 가상세계에서도 많은 팬들을 확보할 것”",
      ],
    },

    //2
    {
      title: "아우디 코리아, 고객 초청 '2023 아우디 서비스 익스피리언스' 진행",
      paragraphs: [
        "- 아우디 공식 서비스센터에서 차량의 정비 및 수리 과정을 직접 보고 경험할 수 있는 고객 경험 프로그램",
        "- 아우디 전문 테크니션과 함께 일반 수리, 차체 수리, 차량 도색 작업 등 교육 및 체험",
        "- 아우디의 프리미엄 A/S 서비스 교육과 경험을 통해 신뢰를 높이고 고객과 소통할 수 있는 기회로 삼아",
        "아우디 코리아(사장: 임현기)는 아우디 강동 서비스센터에서 고객 초청 A/S 서비스 체험 행사인 '2023 아우디 서비스 익스피리언스(2023 Audi Service Experience)'를 진행했다.",
        "'아우디 서비스 익스피리언스'는 아우디 공식 서비스센터에서 전문 테크니션과 함께 차량의 정비 및 수리 과정을 직접 보고 체험할",
        "수 있는 고객 경험 프로그램으로, 아우디만의 전문적이고 체계적인 정비 및 수리 과정과 원칙을 고객들이 직접 경험하며",
        "서비스에 대한 신뢰도를 더욱 높일 수 있도록 마련되었다.'",
        ,
      ],
    },

    //3
    {
      title:
        "팀 아우디 스포트, 다카르랠리 2023시즌 우수한 스테이지 성적으로 마무리",
      paragraphs: [
        "- 14회 스테이지 포디움 달성 및 총 7회의 전체 탑 3 기록",
        "- 전기구동 저공해 레이스 카의 높은 효율성 증명",
        "- 독일 아우디 AG 이사회 멤버이자 기술 개발 최고 운영책임자인 올리버 호프만, “아우디 스포트 팀은 2024년 랠리로 돌아올 것”",
        " 아우디는 여러 어려움에도 다카르 랠리의 2023년 시즌 마지막까지 우수한 성적으로 마무리했다.",
        " 전기 구동장치를 채용한 아우디 RS Q e-트론은 프롤로그 스테이지를 포함해 총 15일간 14차례 포디움에 올랐다.",
        " 아우디 팀 드라이버들은 사흘 동안 랠리의 선두를 달렸으나 수차례의 타이어 파손에 이어진 사고로 인해",
        " 카를로스 사인츠/루카스 크루즈(Carlos Sainz/Lucas Cruz), 스테판 피터한셀/에두아르 불랑제(Stéphane Peterhansel/Edouard Boulanger) 팀이 중도하차하고",
        "마티아스 엑스트롬/에밀 베르크비스트(Mattias Ekström/Emil Bergkvist) 팀이 크게 뒤처지면서, 14위로 시즌을 마무리했다.",
      ],
    },

    //4
    {
      title: "아우디, ‘2023 아우디 로열티 캠페인’ 실시",
      paragraphs: [
        "- 11월 1일부터 30일까지 전국 아우디 공식 서비스센터에서 13가지 필수항목 무상점검 서비스 제공",
        "- 2018년 12월 31일 이전 등록차량 대상",
        "- 캠페인 기간 중 아우디 순정부품 20% 할인 및 사은품 제공",
        " 아우디 코리아(사장: 임현기)가 오는 11월 30일까지 총 4주간, 2018년 12월 31일 이전에",
        " 등록된 아우디 차량을 보유한 고객 대상의 '2023 아우디 로열티 캠페인’을 실시한다.",
        " 전국 아우디 공식 서비스센터에서 동시에 진행하는 이번 서비스 캠페인은 공식 서비스센터 입고일자와 관계없이",
        " 2018년 12월 31일 이전에 등록된 모든 아우디 차량을 대상으로 진행되는 캠페인으로, 세심한 차량 점검을 통해 고객들이 오랫동안 안전한 차량 운행을 할 수 있도록 돕기 위해 마련됐다.",
      ],
    },

    //5
    {
      title: "아우디, 잉골슈타트에 새로운 자동차 안전 센터 개관",
      paragraphs: [
        "- 사내 기술 파크 (incampus technology park) 와 함께 새로운 아우디 자동차 안전 센터 개관",
        "- 성능과 효율성이 대폭 강화된 테스트 시설, 미래 성능 요건까지 갖춰",
        "- 충돌 안전 기술 (passive safety) 발전을 위해 1억 유로 투자",
        " 아우디는 독일 잉골슈타트 본사 부지 안에 새로운 자동차 안전 센터를 개관했다고 밝혔다. ",
        " 아우디의 새로운 자동차 안전 센터는 성능을 대폭 개선한 최첨단 충돌 테스트 시설로 1억 유로 가량이 투자되었다.",
        " 특히 250미터에 달하는 시험용 도움닫기 트랙, 100톤 무게의 이동형 충돌 블록, 두 개의 차량을 90도 각도로 충돌시킬 수 있는 기능 등이 눈에 띈다.",
        " 이를 통해 아우디는 프리미엄 브랜드로서 현재의 국제 기준을 넘어서는 한층 강화된 차량 안전 기술 요건을 충족하는 데 주력하고 있다.",
      ],
    },

    //6
    {
      title: "아우디, ‘아우디 코리아, ‘아우디 스타필드 수원 컨셉 스토어’ 오픈",
      paragraphs: [
        "- 아우디 코리아, 최근 오픈한 스타필드 수원 내 네번째 시티 몰 컨셉 전시장 오픈",
        "- 수도권 남부의 중심인 수원 및 인접지역 고객들에게 아우디의 프리미엄 브랜드 경험 및 서비스 제공 기대",
        "아우디 코리아(사장: 임현기)는 아우디 공식 딜러사인 바이에른오토(대표: 권혁민, 하승엽)가 스타필드 수원에 신규 전시장을 오픈했다고 밝혔다.",
        "아우디 스타필드 수원 컨셉 스토어는 아우디 코리아가 고객과의 접점 확대를 위해 도입한 네번째 ‘시티 몰 컨셉’ 전시장으로 연면적 285.62㎡, 총 3대의 차종을 전시할 수 있는 공간을 갖췄다.",
        "최근 오픈한 스타필드 수원 쇼핑몰 1층에 위치해 있어 탁월한 접근성과 편의성을 바탕으로 수도권 남부의 중심에 위치한",
        "수원 및 인접 경기지역 고객들에게도 수준 높은 서비스와 아우디의 프리미엄 브랜드 경험을 제공할 예정이다.",
        "특히 이번 아우디 스타필드 수원 컨셉 스토어에는 아우디의 정체성이 반영된 새로운 CI를 적용해 아우디 브랜드를 더욱 감각적으로 구현해냈다.",
      ],
    },

    //7
    {
      title:
        "아우디, 드리프트 아티스트 켄 블락과 전기 랠리카 ‘아우디 S1후니트론’ 공개",
      paragraphs: [
        "- 세계적인 드리프트 아티스트 켄블락과 짐카나 영상 프로젝트 “일렉트리카나 (Electrikana)“ 비디오 공개",
        "- 아우디 스포트에서 개발한 순수 전기 랠리카 프로토타입 ‘아우디 S1 후니트론‘ 공개",
        "드리프트 퍼포먼스로 이름난 미국의 드리프트 아티스트 켄 블락(Ken Block)이 아우디와 파트너쉽을 맺고 제작한 일렉트리카나 (Electrikana)비디오를 공개했다.",
        "이 영상에서 첫 선을 보인 ‘아우디 S1 후니트론(Audi S1 Hoonitron)‘은 독일 네카줄름에 위치한 아우디 스포트(Audi Sport)에서 개발한 순수 전기 랠리카의 프로토타입으로 과거 아우디 아이콘 모델에서 영감을 얻어 제작되었다.",
        "이번에 아우디가 공개한 영상에서 켄 블락은 ‘아우디 S1 후니트론‘으로 다이내믹한 드리프트, 화려한 점프 ",
        "그리고 도넛 드리프트 등의 다양한 주행 기술을 이용하여 미국 라스베이거스의 도로를 질주한다. ",
        "또한, 르망 레이스의 전설인 아우디 드라이버 ‘톰 크리스텐슨(Tom Kristensen)‘이 출연하고 촬영 기간 동안 많은 화제를 모았던 아우디의 다양한 레전드 레이싱 모델들이 대거 등장한다.",
      ],
    },

    //8
    {
      title:
        "아우디, 크로스오버 쿠페 아우디 액티브스피어 콘셉트(Audi activesphere concept) 공개",
      paragraphs: [
        "-아우디의 미래 비전을 보여주는 스피어(sphere) 시리즈 콘셉트의 네 번째 모델",
        "- 세련된 디테일과 우아함, 뛰어난 오프로드 성능까지 갖춘 럭셔리 크로스오버 쿠페",
        "아우디는 미래 럭셔리 세그먼트에 대한 비전을 보여주는 스피어 시리즈의 네 번째 모델이자 스피어 콘셉트 차량의 대미를 장식할 아우디 액티브스피어 콘셉트 (Audi activesphere concept)를 공개했다.",
        "아우디는 지난 2021년 아우디 스카이스피어 로드스터, 2022년 아우디 그랜드스피어 세단과 아우디 어반스피어 콘셉트를 공개했다.",
        "이번 공개한 아우디 액티브스피어 콘셉트는 태평양과 맞닿아 있는 대표적인 해안 고속도로 퍼시픽 코스트 하이웨이(Pacific Coast Highway)인근 말리부에 위치한 아우디 디자인 스튜디오에서 개발되었다.",
        "스튜디오 매니저 가엘 부진(Gael Buzyn)은 “아우디 액티브스피어는 아우디 스포트백의 우아함과 SUV 차량의 실용성, 그리고 오프로드 역량을 골고루 갖춘 새로운 유형의 크로스오버 쿠페 차량이다”라고 말했다.",
        "아우디 액티브스피어는PPE 플랫폼을 기반으로 전기구동 및 고속 충전 기술로 약 600km 이상의 주행이 가능하다.",
        "스티어링 휠과 페달은 운전자가 적극적으로 차량을 제어할 수 있도록 하면서 동시에 도로 위에서 보다 편안한 시간을 보낼 수 있도록 자율주행 기능을 제공한다.",
        "역동적이며 동시에 우아한 쿠페 차량으로 단 몇 초 만에 다양한 장비 수송이 가능한 픽업 트럭으로 변모하며 카고 베드에는",
        " 두 대의 전동바이크를 싣기에도 충분한 공간이 있는 것이 특징이다.",
      ],
    },

    // 다른 뉴스 콘텐츠들을 여기에 추가합니다.
  ];

  viewBtns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      let content = contents[index];

      hiddenNews.querySelector("h1").textContent = content.title;

      let paragraphs = hiddenNews.querySelectorAll("p");
      content.paragraphs.forEach(function (paragraph, i) {
        paragraphs[i].textContent = paragraph;
      });
    });
  });
});
