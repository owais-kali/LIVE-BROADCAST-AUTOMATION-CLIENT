import React from 'react'

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
} from '@coreui/react'
import { DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

function GT_Card({ GT_Name }) {
  return (
    <CCol sm={4}>
      <CCardBody>
        <CCard style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={ReactImg} />
          <CCardBody>
            <CCardTitle>{GT_Name}</CCardTitle>
          </CCardBody>
          <CListGroup flush>
            <CFormFloating>
              <CFormInput
                type="value"
                id="floatingInputValue"
                placeholder="ELIMS"
              />
              <CFormLabel htmlFor="floatingInputValue">Input with value</CFormLabel>
            </CFormFloating>
          </CListGroup>
          <CCardBody>
            <CButton href="#">Go somewhere</CButton>
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
            <GT_Card GT_Name="ELIMINATION" />
            {/* <GT_Card GT_Name="Dead Alive"/> */}
          </CRow>
        </CCard>

      </CCol >
    </CRow >
  )
}

GT_Card.propTypes = {
  GT_Name: PropTypes.string
};

export default Test
