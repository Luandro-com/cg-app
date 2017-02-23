import React from 'react';
import scriptLoader from 'react-async-script-loader';
import Phone from 'react-icons/lib/md/local-phone';
import Email from 'react-icons/lib/md/email';
import Location from 'react-icons/lib/md/location-on';
import { colors, mailing } from '../utils/config';
import Input from './Input';
import Button from './Button';
import Rendered from './Rendered';

class Contact extends React.Component {
  state = {
    status: 'available',
    name: 'Nome',
    email: 'E-mail',
    comment: 'Deixe seu comentário.',
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    if (isScriptLoaded && isScriptLoadSucceed) {
      emailjs.init(mailing.user);
    }
  }

  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        emailjs.init(mailing.user);
      } else this.props.onError();
    }
  }

  handleChange = (name, value) => {
    const change = {};
    change[name] = value;
    this.setState(change);
  }

  handleSubmit = () => {
    event.preventDefault();
    const { name, email, comment } = this.state;
    this.setState({ status: 'pending' });
    emailjs.send(mailing.service, mailing.template, { name, email, comment })
    .then((response) => {
      if (response.status === 200) {
        this.setState({
          status: 'success',
          name: 'Nome',
          email: 'E-mail',
          comment: 'Deixe seu comentário.',
        }, () => setTimeout(this.setState({ status: 'available' }), 3000));
      }
      // console.log('SUCCESS. status=%d, text=%s', response.status, response.text);
    }, (err) => {
      this.setState({ status: 'error' }, () => setTimeout(this.setState({ status: 'available' }), 3000));
      // console.log('FAILED. error=', err);
    });
  }

  render() {
    const { slug, image, title, text, custom: { telefone, email, endereco } } = this.props;
    const selectBackground = () => {
      switch (this.state.status) {
        case 'available':
          return colors.white;
        case 'pending':
          return colors.grey;
        case 'success':
          return colors.orange;
        case 'error':
          return colors.grey;
        default:
          return colors.white;
      }
    };
    const selectText = () => {
      switch (this.state.status) {
        case 'available':
          return 'Enviar';
        case 'pending':
          return <img src="static/ellipsis.svg" alt="carregando..." />;
        case 'success':
          return 'Enviado com sucesso';
        case 'error':
          return 'Erro...';
        default:
          return 'Enviar';
      }
    };
    return (
      <section className="wrapper" id={slug}>
        <div className="container">
          <div className="box1">
            <img src={image} alt="Contato" className="logo" />
            <Rendered className="content" data={text} />
            <div className="row">
              <Phone color={colors.orange} />
              <span style={{ padding: '0 8px', color: colors.orange }}>Ligue </span>
              <span>{telefone}</span>
            </div>
            <div className="row">
              <Email style={{ paddingRight: 8 }} />
              <span>{email}</span>
            </div>
            <div className="row">
              <Location style={{ paddingRight: 8 }} />
              <span>{endereco}</span>
            </div>
          </div>
          <div className="box2">
            <h3 style={{ color: colors.white, fontWeight: 300 }}>{title}</h3>
            <Input dark onChange={value => this.handleChange('name', value)} value={this.state.name} />
            <Input dark onChange={value => this.handleChange('email', value)} value={this.state.email} />
            <Input dark type="textarea" row="60" onChange={value => this.handleChange('comment', value)} value={this.state.comment} />
            <div className="button">
              <Button round background={selectBackground()} onClick={() => this.handleSubmit()}>{selectText()}</Button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            padding: 50px 0;
            margin: 0 auto;
            background: rgba(33,33,33,1);
          }
          .container {
            height: 100%;
            width: 95%;
            magin: 0 auto;
          }
          .box1 {
            height: 100%;
            color: ${colors.white};
            font-weight: 100;
            margin: 0 auto;
            text-align: center;
            padding-right: 10;
            display: flex;
            flex-flow: column;               
          }
          .logo {
            max-width: 70%;
            margin: 0 auto;
          }
          .box2 {
            display: flex;
            flex-flow: column;
            margin: 0 auto;
            text-align: center;
            max-width: 80%;
          }
          .content {
            max-width: 80%;
            margin: 10px auto;
            color: grey;
          }
          .row {
            padding: 5px 0;
            text-align: center;
          }
          @media (min-width: 768px) {
            .container {
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              justify-content: space-around;
            }
            .box1 {
              border-right: 1px solid ${colors.grey};
              justify-content: space-around;
              height: 300px;
              text-align: left;
              width: 55%;
            }
            .logo {
              margin: 0;
            }
            .box2 {
              width: 35%;
              height: 300px;
              justify-content: space-around;
              text-align: left;
            }
            .content {
              margin: 10px 0;
            }
            .row {
              text-align: left;
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
            }
            .button {
              text-align: left;
            }
          }
          @media (min-width: 1024px) {
            .container {
              max-width: 968px;
              margin: 0 auto;
            }
          }
        `}</style>
      </section>
    );
  }
}

Contact.propTypes = {
  custom: React.PropTypes.objectOf(React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array, React.PropTypes.string])),
  title: React.PropTypes.string,
  slug: React.PropTypes.string,
  image: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default scriptLoader(
  [
    'https://cdn.emailjs.com/dist/email.min.js',
  ],
)(Contact);
