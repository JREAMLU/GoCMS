// +----------------------------------------------------------------------
// | GoCMS 0.1
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.6574.com.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: zzdboy <zzdboy1616@163.com>
// +----------------------------------------------------------------------

/**
 * 公告管理
 */

/**
 * 提交检测
 */
function form_submit() {
	var title = $.trim($("#title").val());
	if (title == '') {
		$("#title").focus();
		notice_tips("请输入公告标题!");
		return false;
	}

	var starttime = $.trim($("#starttime").val());
	if (starttime == '') {
		$("#starttime").focus();
		notice_tips("请输入起始日期!");
		return false;
	}

	var endtime = $.trim($("#endtime").val());
	if (endtime == '') {
		$("#endtime").focus();
		notice_tips("请输入截止日期!");
		return false;
	}

	content = KE.html('content');
	
	if (content == '') {
		$("#content").focus();
		notice_tips("请输入公告内容!");
		return false;
	}

	return true;
}

 /**
 * 删除公告
 */
function delete_announce(id) {
	if (id == '') {
		notice_tips("参数错误!");
		return false;
	}

	art.dialog.confirm('你确定要删除吗?', function() {
		$.ajax({
			type : "POST",
			url : "/Announce/Delete/",
			data : "id=" + id,
			success : function(tmp) {
				if (tmp.status == 1) {
					window.location.reload();
					notice_tips("删除成功!");
				} else {
					notice_tips(tmp.message);
				}
			}
		});
	}, function() {
		notice_tips("你取消了删除公告操作!");
	});
}