import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken, saveConfig } from '../redux/actions';
import { fetchCategorys } from '../services/rankingsService';

class Settings extends Component {
  state = {
    categorys: [],
    categoryId: '',
    difficulty: '',
    type: '',
  };

  async componentDidMount() {
    try {
      const token = await fetchCategorys();
      this.setState({ categorys: token });
    } catch (error) {
      console.warn(error);
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { categoryId, difficulty, type } = this.state;
    const { dispatch, history } = this.props;
    await getToken();
    dispatch(saveConfig({ categoryId, difficulty, type }));
    history.push('/game');
  };

  render() {
    const { categorys, categoryId, difficulty, type } = this.state;

    const difficultyList = [
      { name: 'Any Difficulty', value: '' },
      { name: 'Easy', value: 'easy' },
      { name: 'Medium', value: 'medium' },
      { name: 'Hard', value: 'hard' },
    ];

    const typeList = [
      { name: 'Any Type', value: '' },
      { name: 'Multiple Choice', value: 'multiple' },
      { name: 'True / False', value: 'boolean' },
    ];
    return (
      <div>
        <h1 data-testid="settings-title">Settings</h1>
        <form>
          <select
            name="categoryId"
            data-testid="category"
            value={ categoryId }
            onChange={ this.handleChange }
          >
            <option
              value=""
            >
              Any Category
            </option>
            {categorys.map((category) => (
              <option
                key={ category.id }
                value={ category.id }
              >
                {category.name}
              </option>
            ))}
          </select>
          <select
            name="difficulty"
            data-testid="difficulty"
            value={ difficulty }
            onChange={ this.handleChange }
          >
            {difficultyList.map(($difficulty) => (
              <option
                key={ $difficulty.name }
                value={ $difficulty.value }
              >
                {$difficulty.name}
              </option>
            ))}
          </select>
          <select
            name="type"
            data-testid="type"
            value={ type }
            onChange={ this.handleChange }
          >
            {typeList.map(($type) => (
              <option
                key={ $type.name }
                value={ $type.value }
              >
                {$type.name}
              </option>
            ))}
          </select>
          <button type="button" onClick={ this.handleClick }>Jogar</button>
        </form>
      </div>
    );
  }
}

Settings.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Settings);
