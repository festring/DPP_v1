# 이더리움 블록체인 기반 Digital Product Passport

이 프로젝트는 **이더리움 블록체인**을 기반으로 **디지털 제품 여권(Digital Product Passport)** 을 구현합니다. 이를 통해 제품의 정보를 투명하게 관리하고, 추적 가능한 디지털 이력을 제공합니다.

<br><br>

## 📋 필요 환경

- **Node Package Manager (npm)**  
  Node.js와 함께 제공되는 패키지 매니저로, 프로젝트의 종속성을 설치하고 관리할 수 있습니다.  
  **설치 방법**: [npm 공식 사이트](https://www.npmjs.com/get-npm)에서 설치 파일을 다운로드하여 설치합니다.

- **React**  
  사용자 인터페이스를 위한 JavaScript 라이브러리입니다. 프론트엔드에서 블록체인과 상호작용하는 UI를 구현하는 데 사용됩니다.  
  **설치 방법**: 
  ```bash
  npx create-react-app my-app

- **Ganache**  
  이더리움 블록체인 테스트 환경을 제공하는 도구입니다. 스마트 계약을 배포하고 테스트하기 위해 사용됩니다.  
  **설치 방법**: [Ganache 공식 사이트](https://trufflesuite.com/ganache/)에서 다운로드 가능합니다.

- **Truffle**  
  이더리움 개발 프레임워크로, 스마트 계약 개발 및 배포를 돕습니다.  
  **설치 방법**: 
  ```bash
  npm install -g truffle

- **MetaMask**  
    브라우저에 설치할 수 있는 지갑 확장 프로그램으로, 블록체인 네트워크와 상호작용합니다.
  **설치 방법**: [MetaMask 웹사이트](https://metamask.io/)에서 브라우저 확장 프로그램으로 설치 가능합니다.

- **Solidity**  
    이더리움 스마트 계약을 작성하는 데 사용되는 프로그래밍 언어입니다. Solidity 컴파일러 설치가 필요합니다.
  **설치 방법**: 
  ```bash
  npm install -g solc

- **web3.js**  
    이더리움 블록체인과 상호작용할 수 있는 JavaScript 라이브러리입니다.
  **설치 방법**: 
  ```bash
  npm install web3

각 항목 설치 후 정상적으로 동작하는지 확인한 후 프로젝트를 실행하세요.

<br><br>

## 📂 디렉토리 구성 설명

- **build, contracts, migrations 폴더 및 truffle-config.js 파일**  
  이 폴더들은 스마트 계약을 배포하는 데 필요한 파일들로 구성되어 있습니다.
  - `build` 폴더에는 스마트 계약을 컴파일한 후 생성된 파일이 포함됩니다.
  - `contracts` 폴더에는 스마트 계약 코드를 작성한 Solidity 파일이 포함됩니다.
  - `migrations` 폴더에는 스마트 계약을 블록체인에 배포할 때 사용되는 설정 파일이 포함됩니다.
  - `truffle-config.js` 파일은 Truffle 환경 설정을 정의하며, 배포 네트워크 설정 및 테스트 네트워크 설정이 필요할 경우 이 파일을 수정합니다.

- **기타 폴더 및 파일**  
  이외의 폴더와 파일들은 web3.js 라이브러리를 사용하여 스마트 계약과 웹 애플리케이션을 연동하는 **React 기반 앱 소스**들로 구성되어 있습니다. 이들은 스마트 계약의 데이터를 시각화하여 사용자에게 웹 형식으로 제공합니다.

<br><br>

## 🔑 핵심 파일 소개

- **truffle-config.js**  
  Truffle 프로젝트의 핵심 설정 파일로, 가상 블록체인 환경에서 스마트 계약을 테스트하고 배포하기 위한 설정을 정의합니다. 여기에는 **Ganache**와 같은 로컬 개발 환경의 주소와 포트번호를 지정할 수 있습니다.  
  **자세한 설정 정보**: [Truffle Configuration Guide](https://trufflesuite.com/docs/truffle/reference/configuration)

- **migrations/2_deploy_contracts.js**  
  이 파일은 스마트 계약을 블록체인에 배포하기 위해 사용됩니다. 배포할 Solidity 파일과 관련 설정을 관리하며, Truffle의 migration 기능을 사용해 여러 스마트 계약을 순차적으로 배포할 수 있습니다.  
  **추가 설명**: Truffle의 migration 스크립트는 배포 이력을 기록하여 중복 배포를 방지하고, 배포가 필요한 스마트 계약을 효율적으로 관리합니다.

- **contracts/Contacts.sol**  
  Solidity로 작성된 스마트 계약 코드 파일입니다. 이 파일에서는 제품의 디지털 이력과 관련된 데이터 구조와 기능을 정의합니다.  
  **Solidity 공식 문서**: [Solidity Documentation](https://docs.soliditylang.org/)

- **src/config.js**  
  배포된 스마트 계약의 주소와 ABI(Application Binary Interface)를 저장하는 파일입니다. 이를 통해 web3.js가 특정 스마트 계약과 상호작용할 수 있도록 돕습니다.  
  **추가 정보**: ABI는 스마트 계약의 함수와 데이터를 표현하는 JSON 형식의 데이터로, web3.js가 계약의 메서드를 호출할 수 있도록 합니다.

- **src/App.js**  
  React와 web3.js를 통해 스마트 계약 데이터를 **DPP**(Digital Product Passport) 형식으로 웹 애플리케이션에 표시하는 파일입니다. App.js는 전체 앱의 구성과 동작을 정의하며, 스마트 계약과의 상호작용 로직이 포함됩니다.

- **src/App.css**  
  App.js와 연결된 스타일시트 파일로, 웹 애플리케이션의 디자인을 구성합니다. 사용자가 데이터를 보기 쉽게 디자인 요소를 관리하며, 페이지의 전반적인 레이아웃을 담당합니다.

<br><br>

## 🚀 구동 및 사용법

### 1. 가상 이더리움 네트워크 환경 생성

- **Ganache**를 사용하여 로컬 가상 네트워크를 생성합니다. 이를 통해 개발 및 테스트 목적으로 사용할 수 있는 이더리움 블록체인 환경을 구축할 수 있습니다.
  - **Ganache 다운로드**: [Ganache 공식 사이트](https://trufflesuite.com/ganache/)

### 2. 브라우저와 가상 네트워크 연결

- **MetaMask**를 설치하여 브라우저와 Ganache 가상 네트워크를 연결합니다. MetaMask는 가상 네트워크와 상호작용할 수 있는 개인 지갑 역할을 합니다.
  - **MetaMask 설치**: [MetaMask 웹사이트](https://metamask.io/)

### 3. 배포 환경 설정

- **Truffle**을 사용해 배포 환경을 설정합니다. `truffle-config.js` 파일에서 Ganache 네트워크의 주소와 포트를 지정하여 Truffle이 가상 네트워크에 연결되도록 합니다.

### 4. 스마트 계약 파일 준비

- 배포할 **Solidity 스마트 계약 파일**을 `contracts` 폴더에 넣고, `migrations` 폴더 내의 배포 스크립트에서 해당 스마트 계약을 불러와야 합니다.

### 5. 스마트 계약 배포

- **Truffle**의 migration 기능을 사용하여 스마트 계약을 배포합니다.
  ```bash
  truffle migrate --network development
  ```

### 6. 리액트 라이브러리 설치

- 리액트와 관련된 필요한 모듈들을 설치합니다.
  ```bash
  npm install
  ```

### 7. 리액트 앱 시작

- 리액트 애플리케이션을 실행하여 웹에서 스마트 계약 데이터를 볼 수 있도록 합니다.
  ```bash
  npm start
  ```

<br><br>

## 🌟 스크린샷 및 기능 소개


### 웹 애플리케이션 기능

이 프로젝트는 **스마트 계약**에 포함된 다양한 데이터를 웹 애플리케이션 형식의 DPP(Digital Product Passport)에 수록하여 사용자에게 투명하게 제공합니다. 주요 기능은 다음과 같습니다:

1. **제품 정보 조회**: DPP는 제품의 디지털 이력을 확인할 수 있으며, 사용자에게 특정 제품의 추적 가능한 정보를 제공합니다.
2. **스마트 계약 상호작용**: MetaMask와 연동하여 사용자가 계약에 있는 정보를 쉽게 접근하고 상호작용할 수 있도록 합니다.
3. **데이터 시각화**: Web3.js를 활용해 블록체인 데이터가 사용자 친화적인 형식으로 제공됩니다.

### 📸 스크린샷

스마트 계약의 데이터를 웹앱에 보여주는 모습:

![웹앱의 DPP 인터페이스 예시](./screenshots/dpp_example.png)



  
