import styled from 'styled-components';
import tags from './tags.json';

const TagContainer = styled.section`
    display: flex;
    gap: 25px;
    align-items: center;
    margin: 40px 0;
`;

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
;

const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;


const Tags = () => {
    return(
        <TagContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
        </TagContainer>
    );
}

export default Tags;
