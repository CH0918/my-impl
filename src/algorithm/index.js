// 遍历树形结构
// var treeNodes = [
//   {
//     id: 1,
//     name: '1',
//     children: [
//       {
//         id: 11,
//         name: '11',
//         children: [
//           {
//             id: 111,
//             name: '111',
//             children: [],
//           },
//           {
//             id: 112,
//             name: '112',
//           },
//         ],
//       },
//       {
//         id: 12,
//         name: '12',
//         children: [],
//       },
//     ],
//     users: [],
//   },
// ];
// function parseTree(treeNodes) {
//   if (!treeNodes || treeNodes.children == 0) return;
//   for (var i = 0, len = treeNodes.length; i < len; i++) {
//     var treeObj = treeNodes[i];
//     // console.log('parent id = ', treeObj.id);
//     var child = treeObj.children;
//     if (!child || child.length == 0) {
//       // 说明遍历完了
//       console.log('child id = ', treeObj.id);
//     } else {
//       // 递归继续遍历
//       console.log('parent id = ', treeObj.id);
//       parseTree(child);
//     }
//   }
// }
// parseTree(treeNodes);

//
