import './header.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
// import * as logo from '../../assets/images/logo.png'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {isLoggedIn} from '../../helpers/api'
import {connect} from 'react-redux';
import {validate} from "../../Session/validate";
import {reduxForm} from "redux-form";
import actions from "../../Layout/Header/actions";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
};

const {logout, fetchCurrentUser} = actions;

class Header extends Component {
  logout(){
    this.props.logout()
  }

  componentWillMount(){
    this.props.fetchCurrentUser()
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/*<AppBar position="static">*/}
          {/*<Toolbar>*/}
            {/*<Typography variant="h6" color="inherit" className={classes.grow}>*/}
              {/*<Link to='/' className={classes.link}>*/}
                {/*<Button color="inherit">Island Mining</Button>*/}
              {/*</Link>*/}
              {/*<Link to='/items' className={classes.link}>*/}
                {/*<Button color="inherit">Items</Button>*/}
              {/*</Link>*/}
            {/*</Typography>*/}
            {/*{*/}
              {/*!this.props.currentUser ? (*/}
                {/*<span>*/}
                  {/*<Link to='/login' className={classes.link}>*/}
                    {/*<Button color="inherit">Login</Button>*/}
                  {/*</Link>*/}
                  {/*<Link to='/signup' className={classes.link}>*/}
                    {/*<Button color="inherit">Sign Up</Button>*/}
                  {/*</Link>*/}
                {/*</span>*/}
              {/*) : (*/}
                {/*<span>*/}
                  {/*<span>{this.props.currentUser ? this.props.currentUser.email : ""}</span>*/}
                  {/*<Button color="inherit" onClick={this.logout.bind(this)}>Logout</Button>*/}
                {/*</span>*/}
              {/*)*/}
            {/*}*/}
          {/*</Toolbar>*/}
        {/*</AppBar>*/}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.sessionReducer.currentUser
});

export default connect(
  mapStateToProps, {logout, fetchCurrentUser}
)(withStyles(styles)(Header));
