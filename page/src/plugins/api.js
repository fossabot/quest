import request from './request'
import md5 from 'js-md5'

function post(url, data) {
    return request({
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    })
}

export const user = {
    login: (name, pass) => {
        return post('/user/login', {
            name, pass: md5(pass)
        })
    },
    getList: () => {
        return request({
            url: '/user/list',
            method: 'GET'
        })
    },
    add: (name, pass, nickname, admin, edit) => {
        if (nickname == '' || nickname == undefined) nickname = name
        if (admin == undefined) admin = false
        if (edit == undefined) edit = false
        return post('/user/add', {
            name, pass: md5(pass), nickname, admin, edit
        })
    },
    edit: (id, name, pass, nickname, admin, edit) => {
        if (nickname == '' || nickname == undefined) nickname = name
        if (admin == undefined) admin = false
        if (edit == undefined) edit = false
        return post('/user/' + id, {
            name, pass: pass ? md5(pass) : '', nickname, admin, edit
        })
    },
    remove: (id) => {
        return request({
            url: '/user/' + id,
            method: 'DELETE'
        })
    },
}

export const subject = {
    getList: () => {
        return request({
            url: '/subject/list',
            method: 'GET'
        })
    },
    add: (name, tag) => {
        return post('/subject/add', {
            name, tag
        })
    },
    edit: (id, tag) => {
        return post('/subject/' + id, {
            name, tag
        })
    },
    remove: (id) => {
        return request({
            url: '/subject/' + id,
            method: 'DELETE'
        })
    },
}

export const question = {
    getList: () => {
        return request({
            url: '/question/list',
            method: 'GET'
        })
    },
    import: (sid, list) => {
        return post('/question/import', {
            sid, list
        })
    },
    add: (sid, level, type, question, options, answer, score) => {
        return post('/question/add', {
            sid, level, type, question, options, answer, score
        })
    },
    edit: (id, sid, level, type, question, options, answer, score) => {
        return post('/question/' + id, {
            sid, level, type, question, options, answer, score
        })
    },
    remove: (id) => {
        return request({
            url: '/question/' + id,
            method: 'DELETE'
        })
    },
}

export const exam = {
    getList: () => {
        return request({
            url: '/exam/list',
            method: 'GET'
        })
    },
    add: (sid, questions, answers) => {
        return post('/exam/add', {
            sid, questions, answers
        })
    },
    edit: (id, sid, questions, answers) => {
        return post('/exam/' + id, {
            sid, questions, answers
        })
    },
    remove: (id) => {
        return request({
            url: '/exam/' + id,
            method: 'DELETE'
        })
    },
}