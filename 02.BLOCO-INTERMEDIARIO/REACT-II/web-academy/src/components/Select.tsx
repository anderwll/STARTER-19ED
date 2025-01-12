import styled from 'styled-components';

interface SelectProps {
	marginTop?: string;
	width?: string;
}

export const Select = styled.select<SelectProps>`
	padding: 15px 28px;
	font-size: 1.2rem;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.backgroundColor};
	color: ${({ theme }) => theme.textColor};
	width: ${({ width }) => width ?? '95%'};
	padding: 10px 20px;
	border: 1px solid ${(props) => props.theme.primaryColor};
	margin-top: ${(props) => props.marginTop};

	&:hover {
		box-shadow: 1px 8px 12px -5px rgba(49, 49, 49, 0.68);
	}

	&:focus {
		box-shadow: 1px 8px 14px -5px rgba(49, 49, 49, 0.68);
	}
`;
