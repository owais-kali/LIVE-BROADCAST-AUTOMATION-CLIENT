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

function GT_Card({ GT_Name, GT_TEXTS }) {

  const [texts, setTexts] = useState(GT_TEXTS);

  const OnTextChange = (key, value) => {
    console.log("Text key: " + key + " Value: " + value)
    let NewText = texts;
    NewText[key] = value;
    setTexts(NewText)
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
                <CFormInput id="floatingInput"
                  onInput={e => OnTextChange(input, e.target.value)} />
                <CFormLabel htmlFor="floatingInput">{input}</CFormLabel>
              </CFormFloating>
            ))}
          </CListGroup>
          <CCardBody className="align-items-center mb-3">
            <CRow className="align-items-center mb-3">
              <CCol xs>
                <CButton href="#">Show</CButton>
                <CButton href="#">Hide</CButton>
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
