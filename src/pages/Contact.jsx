import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    .map {
      width: 100vw;
      height: 50rem;
    }
    .para1 {
      text-transform: capitalize;
      font-weight: bold;
      background: -webkit-linear-gradient(#39b5e0, #301e67);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* position: absolute;
      top: 10rem; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <Wrapper>
      <h2 className="para1">
        For a Better Communication Please Contact With Us
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53882.34141062805!2d89.85725561962234!3d23.60487886973748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1679508479547!5m2!1sbn!2sbd"
        className="map"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="fast"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
