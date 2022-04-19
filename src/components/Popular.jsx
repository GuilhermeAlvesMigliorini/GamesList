import styled from "styled-components"
import Games from "./Games"

function Popular() {
  return (
    <Container>
      <h1>Popular Games</h1>
      <ul>
        <li><Games/></li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
      </ul>
    </Container>
  )
}

export default Popular

const Container = styled.div`
padding: 2rem;
margin: 4rem 10vw;



  h1{
    text-align: center;
    margin-bottom: 2rem;
    font-size: 3rem;
    color: #F24444;
  }
  ul{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 2rem;
  }

 li{
   background-color: #404040;
   height: 18rem;
   border-radius: 1rem;
 }

 img{
   width: 30rem;
 }
`