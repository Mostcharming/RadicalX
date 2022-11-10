import { borderColor } from '@mui/system';

function Description({ onChange, onInputChange }) {
  return (
    <div className="Pops description">
      <span className="Pops text">Description</span>
      <form>
        <input
          type="text"
          // value={inputs.username || ''}
          onChange={onChange}
          placeholder={'Description'}
          style={{
            height: '197px',
            width: '741px',
            backgroundColor: '#f1f4f8',
            position: 'absolute',
            left: '24px',
            top: '66px',
            borderRadius: '16px',
            border: '1px',
            borderStyle: 'solid',
            borderColor: '#CECE',
          }}
          // width="741px"

          //           height: '197px'

          // backgroundColor: '#F1F4F8'

          // border: 1px solid #CECECE;
          // border-radius: 16px;
        />
      </form>
    </div>
  );
}
export default Description;
