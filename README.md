## 프로젝트 목적
간단한 실습을 통해 배운 개념들을 내 것으로 만들기 위한 프로젝트

## 프로젝트 개요
PC 프로그램을 간단학게 구현하며 다양한 개념을 적용해보고자 함

## 상위 폴더 의미
- how_to_use_dom: DOM 을 활용하여 만든 프로젝트
- how_to_use_react_function: React의 함수형 컴포넌트 를 사용하여 만든 프로젝트
- how_to_use_react_class: React의 클래스 컴포넌트를 사용하여 만든 프로젝트

## how_to_use_dom
### class 명 규칙
- section을 기준으로 class 명 작성하기
- section 하위 태그들은 class 명 누적하기
  - class명이 길어져서 보기 불편할 수 있지만 협업을 가정하여 진행하는 프로젝트이므로 클래스명의 이해도가 빠른 것을 더 중요하게 여김
```
예시)
<section class="user-auth-modal">
    <div class="user-auth-modal__main">
        <div class="user-auth-modal__main__logo-container">
            // ...
        </div>
    </div>
</section>
```

### 폴더 구조
```
|- assets: 이미지, 미디어 파일을 담을 폴더
|- css: css 파일들을 담을 폴더
|       (section 태그 단위로 파일을 분리하여 작성하는 것을 추천)
|- js: js 파일들을 담을 폴더
|       (section 태그 단위로 파일을 분리하여 작성하는 것을 추천)
|- index.html: 기본이 되는 html 파일
```

## git을 사용할 때의 약속
- 반드시 feature를 만든 후 커밋을 작성
- feature명은 `DOM-input_이벤트_구현`과 같이 작성
  - main: 일주일 혹은 이주일 동안 진행한 내용을 복습한 후 main 브랜치에 merge
  - develop: 기본 브랜치
  - feature: 하루동안 진행한 내용에 대해 작성할 브랜치