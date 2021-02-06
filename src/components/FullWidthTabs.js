import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTopMenu } from '../store/actions/appActions'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const sections = [
  { title: 'Главная', url: '/' },
  { title: 'Категории', url: '/catalog' },
  { title: 'Собрать свою', url: '/create' },
  { title: 'Галлерея', url: '/gallery' },
  { title: 'Как это работает', url: '/info' },
  { title: 'О нас', url: '/about' },
]

const checkPathnameValue = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case '/':
    case '/catalog':
    case '/create':
    case '/gallery':
    case '/info':
    case '/about':
    break;
  default:
    return false;
  }
  return pathname;
}



export default function FullWidthTabs() {
  const history = useHistory()

  const dispatch = useDispatch()

  const value = useSelector((state) => state.app.menuValue)

  const handleChange = (event, newValue) => {
    dispatch(setTopMenu(newValue))
  }

  const curValue = checkPathnameValue()

  if(value === undefined || curValue !== value) {
    dispatch(setTopMenu(curValue))
  }

  console.log(value)

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#ffffff' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {sections.map((section, index) => (
            <Tab label={section['title']} onClick={() => history.push(section['url'])} value={section['url']} key={index} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  )
}