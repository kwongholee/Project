import '../App.css';

function Chat() {
  return(
    <div>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>

      <h4 class="container mt-4">채팅창</h4>

      <div class="container p-4 detail">

      <div class="row">
        <div class="col-3">
          <ul class="list-group chat-list">
            <li class="list-group-item" data-id="<%= data[i]._id %>">
              <h6>data[i].title</h6>
              <h6 class="text-small">data[i].member[1]</h6>
            </li>
           </ul>
         </div>
    
         <div class="col-9 p-0">
           <div class="chat-room">
              <ul class="list-group chat-content">
                <li><span class="chat-box">채팅방1 내용</span></li>
                <li><span class="chat-box">채팅방1 내용</span></li>
                <li><span class="chat-box mine">채팅방1 내용</span></li>
              </ul>
            <div class="input-group">
              <input class="form-control" id="chat-input"/>
              <button class="btn btn-secondary" id="send">전송</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    </div>
  );
}

export default Chat;