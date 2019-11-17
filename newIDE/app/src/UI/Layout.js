// @flow
import * as React from 'react';

type TextFieldWithButtonLayoutProps = {|
  renderTextField: () => React.Node,
  renderButton: (style: {|
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    margin?: number,
  |}) => React.Node,
  margin?: 'none' | 'dense',
|};

const textFieldWithButtonLayoutStyles = {
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start', // Align from the top to stay at the same position when error/multiline
  },
  filledTextFieldWithLabelRightButtonMargins: {
    marginTop: 24, // Properly align with the text field (only dense "filled" text fields supported)
    marginLeft: 10,
  },
  standardTextFieldWithLabelRightButtonMargins: {
    marginTop: 17, // Properly align with the text field (only dense "standard" text fields supported)
    marginLeft: 10,
  },
};

/**
 * Position a button on the right of a TextField.
 * Only compatible with TextField with a label.
 */
export const TextFieldWithButtonLayout = ({
  margin,
  renderTextField,
  renderButton,
}: TextFieldWithButtonLayoutProps) => {
  return (
    <div style={textFieldWithButtonLayoutStyles.container}>
      {renderTextField()}
      {renderButton(
        margin === 'none'
          ? textFieldWithButtonLayoutStyles.standardTextFieldWithLabelRightButtonMargins
          : textFieldWithButtonLayoutStyles.filledTextFieldWithLabelRightButtonMargins
      )}
    </div>
  );
};
