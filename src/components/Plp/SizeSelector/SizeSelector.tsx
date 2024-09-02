import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function VerticalExample({sizes}: {sizes: string[]}) {

  return (
    <ButtonGroup vertical>
      <DropdownButton
        as={ButtonGroup}
        title="Select a size"
        id="bg-vertical-dropdown-1"
        variant="secondary"
      >
        {sizes.map((size) => (
        <>
        <Dropdown.Item eventKey="1">{size}</Dropdown.Item>
        </>
    ))}
      </DropdownButton>
    </ButtonGroup>
  );
}

export default VerticalExample;