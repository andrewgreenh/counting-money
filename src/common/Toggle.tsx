import React, { ComponentProps, forwardRef, Ref } from 'react';
import styled from './styles/styled';

export const Toggle = forwardRef(function Toggle(
  props: ComponentProps<'input'>,
  ref: Ref<HTMLInputElement>
) {
  return (
    <label>
      <Input ref={ref} {...props} type="checkbox" />
      <Container>
        <Handle />
      </Container>
    </label>
  );
});

const Input = styled.input`
  left: -9999px;
  position: fixed;
`;

const Container = styled.div`
  align-items: center;
  border-radius: 1em;
  border: 1px solid ${p => p.theme.colors.layerOnMainBackgroundNegative};
  cursor: pointer;
  display: inline-flex;
  height: 1.2em;
  position: relative;
  vertical-align: bottom;
  width: 3em;
`;

const Handle = styled.div`
  background: ${p => p.theme.colors.accent};
  border-radius: 100%;
  height: 1em;
  left: 0.1em;
  position: absolute;
  transition: left 0.2s ease-in-out;
  width: 1em;

  input:checked + div > & {
    left: calc(100% - 1em - 0.1em);
  }
`;
