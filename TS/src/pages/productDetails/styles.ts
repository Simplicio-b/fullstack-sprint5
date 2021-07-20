import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	margin: 0 auto;
	max-width: 1100px;
	padding: 16px;
	width: 80%;
	flex-direction: row;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

export const ContainerImg = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
`;

export const ContainerInfo = styled.div`
	/* align-items: center; */
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	padding: 30px 10px;
`;

export const BoxPrice = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 90%;
	height: 175px;
	box-shadow: 0 0 1em #00000060;
	padding: 15px;
	border-radius: 2px;
`;

interface BtnProps {
	bg: string,
	mb: string
}

export const Btn = styled.button<BtnProps>`
	width: 100%;
	height: 40px;
	color: #fff;
	background-color: ${(e: any) => e.bg};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 700;
	margin-bottom: ${(e: any) => e.mb || 0}px;
`;

interface LabelTxtProps {
	cor: string;
	fw: string,
	fs: string;
}

export const LabelTxt = styled.p<LabelTxtProps>`
	color: ${(e: any) => e.cor};
	font-weight: ${(e: any) => e.fw};
	font-size: ${(e: any) => e.fs || 16}px;
`;

export const ProductImg = styled.img`
	height: 500px;
	cursor: pointer;
`;

export const TamanhoBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	width: 50px;
	border: 1px solid #333;
	border-radius: 2px;
	margin: 10px 10px 0 0;
	cursor: pointer;
	font-weight: 700;

	.active {
		background-color: #333;
		color: #fff;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const ContentTamanhos = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const ContentBtns = styled.div`
	width: 100%;
`;
