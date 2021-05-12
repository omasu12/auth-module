import { Box } from '@material-ui/core';
import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
function EmptyProduct(props) {
  return (
    <Box>
        <SentimentVeryDissatisfiedIcon/> Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn
    </Box>
    );
}

export default EmptyProduct;
