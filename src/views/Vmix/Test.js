import React, { useState } from 'react'

import PropTypes from 'prop-types';

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,

  CFormInput,
  CFormLabel,
  CFormFloating,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

import { Elimination } from 'src/services/Vmix/Callbacks/Elimination.ts'
import {LoadInGameGTs} from 'src/services/Vmix/GTs/GTs.ts'

function GT_Card({ GT_Name, GT_TEXTS }) {

  const [texts, setTexts] = useState(GT_TEXTS);

  const OnTextChange = (key, value) => {
    console.log("Text key: " + key + " Value: " + value)
    let NewText = texts;
    NewText[key] = value;
    setTexts(NewText)
  }

  const OnShowClicked = () => {
    console.log("show button clicked!")
    let playerinfo = {
      "playerInfoList": [
        {
          "uId": 510047574,
          "playerName": "X6ãƒ»Ù¢Ù©",
          "playerOpenId": "70461891675432",
          "picUrl": "",
          "showPicUrl": false,
          "teamId": 3,
          "teamName": "Team3",
          "character": "None",
          "isFiring": false,
          "bHasDied": false,
          "location": {
            "x": 151918,
            "y": 609857,
            "z": 129
          },
          "health": 100,
          "healthMax": 100,
          "liveState": 5,
          "killNum": 10,
          "killNumBeforeDie": 0,
          "playerKey": 2341287079,
          "gotAirDropNum": 0,
          "maxKillDistance": 0,
          "damage": 0,
          "killNumInVehicle": 0,
          "killNumByGrenade": 0,
          "rank": 2,
          "isOutsideBlueCircle": false,
          "inDamage": 0,
          "heal": 0,
          "headShotNum": 0,
          "survivalTime": 0,
          "driveDistance": 0,
          "marchDistance": 0,
          "assists": 0,
          "outsideBlueCircleTime": 0,
          "knockouts": 0,
          "rescueTimes": 0,
          "useSmokeGrenadeNum": 0,
          "useFragGrenadeNum": 0,
          "useBurnGrenadeNum": 0,
          "useFlashGrenadeNum": 0
        }
      ]
    }
    Elimination(playerinfo)
  }

  return (
    <CCol sm={4}>
      <CCardBody>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={ReactImg} />
          <CCardBody>
            <CCardTitle>{GT_Name}</CCardTitle>
          </CCardBody>
          <CListGroup flush>
            {texts.map(input => (
              <CFormFloating key="1" className="mb-3">
                <CFormInput id="floatingInput" onInput={e => OnTextChange(input, e.target.value)} placeholder="value" />
                <CFormLabel htmlFor="floatingInput">{input}</CFormLabel>
              </CFormFloating>
            ))}
          </CListGroup>
          <CCardBody className="align-items-center mb-3">
            <CRow className="align-items-center mb-3">
              <CCol xs>
                <CButton onClick={OnShowClicked}>Show</CButton>
                <CButton>Hide</CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCardBody>
    </CCol>
  );
}

const Test = () => {
  return (
    <CRow>
      <CCol xs={12}>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>Test GTs</strong>
          </CCardHeader>
          <CRow>
            <GT_Card GT_Name="ELIMINATION" GT_TEXTS={["ELIMS", "RANK", "TEAM_NAME"]} />
            {/* <GT_Card GT_Name="Dead Alive" GT_TEXTS={["ELIMS", "RANK", "TEAM_NAME"]}/> */}
          </CRow>
        </CCard>

      </CCol >
    </CRow >
  )
}

GT_Card.propTypes = {
  GT_Name: PropTypes.string,
  GT_TEXTS: PropTypes.array
};

export default Test
