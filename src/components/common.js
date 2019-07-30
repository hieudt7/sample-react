export function showErrorWithCode(errCode) {
  let errorMess
  console.log(errCode)
  switch (errCode) {
    case 'not_logged_in':
      errorMess = 'Bạn chưa đăng nhập'
      break;
    case 'error_account_not_found':
      errorMess = 'Bạn chưa tạo tài khoản, vui lòng tạo tài khoản và quay lại sau.'
      break;
    case 'error_server':
      errorMess = 'Server bị lỗi, vui lòng thử lại sau.'
      break;
    case 'api_error':
      errorMess = 'Thao tác không thực hiện được, xin vui lòng thử lại sau'
      break;
    case 'error_fc_not_enough':
      errorMess = 'Không đủ FC để thực hiện giao dịch, vui lòng nạp thêm FC và thử lại sau.'
      break;
    case 'error_over_max_point':
      errorMess = 'Bạn không thể mua thêm điểm do bạn đã mua đủ 6000 điểm'
      break;
    case 'error_required_mb':
      errorMess = 'Bạn cần nâng cấp sổ vip để nhận quà này.'
      break;
    case 'uid_not_exist':
      errorMess = 'UID không tồn tại.'
      break;
    case 'error_manager_book_exceeded':
      errorMess = 'Bạn đã mở sổ VIP rồi.'
      break;
    case 'token_error':
      errorMess = 'Vui lòng đăng nhập lại'
      break;
    case 'error_point_to_buy_invalid':
      errorMess = 'Không thể mua điểm, vui lòng thử lại, số điểm mua phải khác 0.'
      break;
    case 'error_invalid_reward':
      errorMess = 'Không thể nhận quà, vui lòng thử lại.'
      break;
    case 'you_already_in_team':
      errorMess = 'Bạn đã thuộc một đội.'
      break;
    case 'not_qualify_team_value':
      errorMess = 'Tạo đội không thành công: Gía trị đội hình không đạt yêu cầu.'
      break;
    case 'same_user':
      errorMess = 'Tạo đội không thành công: Bạn không thể mời chính bạn.'
      break;
    case 'team_already_registered':
      errorMess = 'Đội đã được đăng ký thi đấu nên không thể thay đổi thông tin.'
      break;
    case 'max_request_per_user':
      errorMess = 'Bạn đã nộp đủ số đơn tối đa có thể, xin vui lòng đợi phản hồi từ các đội trưởng.'
      break;
    case 'max_request_per_team':
      errorMess = 'Đội đã có đủ số đơn tối đa, xin vui lòng thử lại sau.'
      break;
    case 'team_register_not_open':
      errorMess = 'Thời gian đăng kí thi đấu chưa mở, vui lòng quay trở lại sau.'
      break;
    case 'team_name_invalid':
      errorMess = 'Tên đội không phù hợp.'
      break;
    case 'team_name_exist':
      errorMess = 'Tên đội bị trùng.'
      break;
    case 'enough_register':
      errorMess = 'Đã đủ số đội đăng ký thi đấu.'
      break;
    default:
      errorMess = 'Có lỗi xảy ra. Vui lòng thử lại sau';
      break;
  }
  return errorMess
}


export function smoothScroll(target) {
  if (!target) {
    return
  }
  $('html,body').stop().animate({
    scrollTop: $(target).offset().top
  }, 1000);
}
export function handelKeyDown(e) {
  if (e.key === 'Enter') {
    //this.props.getUserProfile(this.state.searchKey)
    console.log('success')
    return
  }
}
