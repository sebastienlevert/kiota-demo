import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAppointmentFromDiscriminatorValue} from './createAppointmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createAttachmentFromDiscriminatorValue} from './createAttachmentFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createTemplateFromDiscriminatorValue} from './createTemplateFromDiscriminatorValue';
import {Activitypointer, Appointment, Asyncoperation, Attachment, Bulkdeletefailure, Crmbaseentity, Email, Syncerror, Template} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Activitymimeattachment extends Crmbaseentity implements Parsable {
    private __attachmentid_value?: string | undefined;
    private __objectid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _activityMimeAttachment_AsyncOperations?: Asyncoperation[] | undefined;
    private _activityMimeAttachment_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _activityMimeAttachment_SyncErrors?: Syncerror[] | undefined;
    private _activitymimeattachmentid?: string | undefined;
    private _activitymimeattachmentidunique?: string | undefined;
    private _activitysubject?: string | undefined;
    private _anonymouslink?: string | undefined;
    private _attachmentcontentid?: string | undefined;
    private _attachmentid?: Attachment | undefined;
    private _attachmentnumber?: number | undefined;
    private _body?: string | undefined;
    private _body_binary?: string | undefined;
    private _componentstate?: number | undefined;
    private _filename?: string | undefined;
    private _filesize?: number | undefined;
    private _isfollowed?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _mimetype?: string | undefined;
    private _objectid_activitypointer?: Activitypointer | undefined;
    private _objectid_appointment?: Appointment | undefined;
    private _objectid_email?: Email | undefined;
    private _objectid_template?: Template | undefined;
    private _objecttypecode?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _subject?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _attachmentid_value property value. 
     * @returns a string
     */
    public get _attachmentid_value() {
        return this.__attachmentid_value;
    };
    /**
     * Sets the _attachmentid_value property value. 
     * @param value Value to set for the _attachmentid_value property.
     */
    public set _attachmentid_value(value: string | undefined) {
        this.__attachmentid_value = value;
    };
    /**
     * Gets the _objectid_value property value. 
     * @returns a string
     */
    public get _objectid_value() {
        return this.__objectid_value;
    };
    /**
     * Sets the _objectid_value property value. 
     * @param value Value to set for the _objectid_value property.
     */
    public set _objectid_value(value: string | undefined) {
        this.__objectid_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the activityMimeAttachment_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get activityMimeAttachment_AsyncOperations() {
        return this._activityMimeAttachment_AsyncOperations;
    };
    /**
     * Sets the activityMimeAttachment_AsyncOperations property value. 
     * @param value Value to set for the ActivityMimeAttachment_AsyncOperations property.
     */
    public set activityMimeAttachment_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._activityMimeAttachment_AsyncOperations = value;
    };
    /**
     * Gets the activityMimeAttachment_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get activityMimeAttachment_BulkDeleteFailures() {
        return this._activityMimeAttachment_BulkDeleteFailures;
    };
    /**
     * Sets the activityMimeAttachment_BulkDeleteFailures property value. 
     * @param value Value to set for the ActivityMimeAttachment_BulkDeleteFailures property.
     */
    public set activityMimeAttachment_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._activityMimeAttachment_BulkDeleteFailures = value;
    };
    /**
     * Gets the activityMimeAttachment_SyncErrors property value. 
     * @returns a syncerror
     */
    public get activityMimeAttachment_SyncErrors() {
        return this._activityMimeAttachment_SyncErrors;
    };
    /**
     * Sets the activityMimeAttachment_SyncErrors property value. 
     * @param value Value to set for the ActivityMimeAttachment_SyncErrors property.
     */
    public set activityMimeAttachment_SyncErrors(value: Syncerror[] | undefined) {
        this._activityMimeAttachment_SyncErrors = value;
    };
    /**
     * Gets the activitymimeattachmentid property value. 
     * @returns a string
     */
    public get activitymimeattachmentid() {
        return this._activitymimeattachmentid;
    };
    /**
     * Sets the activitymimeattachmentid property value. 
     * @param value Value to set for the activitymimeattachmentid property.
     */
    public set activitymimeattachmentid(value: string | undefined) {
        this._activitymimeattachmentid = value;
    };
    /**
     * Gets the activitymimeattachmentidunique property value. 
     * @returns a string
     */
    public get activitymimeattachmentidunique() {
        return this._activitymimeattachmentidunique;
    };
    /**
     * Sets the activitymimeattachmentidunique property value. 
     * @param value Value to set for the activitymimeattachmentidunique property.
     */
    public set activitymimeattachmentidunique(value: string | undefined) {
        this._activitymimeattachmentidunique = value;
    };
    /**
     * Gets the activitysubject property value. 
     * @returns a string
     */
    public get activitysubject() {
        return this._activitysubject;
    };
    /**
     * Sets the activitysubject property value. 
     * @param value Value to set for the activitysubject property.
     */
    public set activitysubject(value: string | undefined) {
        this._activitysubject = value;
    };
    /**
     * Gets the anonymouslink property value. 
     * @returns a string
     */
    public get anonymouslink() {
        return this._anonymouslink;
    };
    /**
     * Sets the anonymouslink property value. 
     * @param value Value to set for the anonymouslink property.
     */
    public set anonymouslink(value: string | undefined) {
        this._anonymouslink = value;
    };
    /**
     * Gets the attachmentcontentid property value. 
     * @returns a string
     */
    public get attachmentcontentid() {
        return this._attachmentcontentid;
    };
    /**
     * Sets the attachmentcontentid property value. 
     * @param value Value to set for the attachmentcontentid property.
     */
    public set attachmentcontentid(value: string | undefined) {
        this._attachmentcontentid = value;
    };
    /**
     * Gets the attachmentid property value. 
     * @returns a attachment
     */
    public get attachmentid() {
        return this._attachmentid;
    };
    /**
     * Sets the attachmentid property value. 
     * @param value Value to set for the attachmentid property.
     */
    public set attachmentid(value: Attachment | undefined) {
        this._attachmentid = value;
    };
    /**
     * Gets the attachmentnumber property value. 
     * @returns a integer
     */
    public get attachmentnumber() {
        return this._attachmentnumber;
    };
    /**
     * Sets the attachmentnumber property value. 
     * @param value Value to set for the attachmentnumber property.
     */
    public set attachmentnumber(value: number | undefined) {
        this._attachmentnumber = value;
    };
    /**
     * Gets the body property value. 
     * @returns a string
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. 
     * @param value Value to set for the body property.
     */
    public set body(value: string | undefined) {
        this._body = value;
    };
    /**
     * Gets the body_binary property value. 
     * @returns a binary
     */
    public get body_binary() {
        return this._body_binary;
    };
    /**
     * Sets the body_binary property value. 
     * @param value Value to set for the body_binary property.
     */
    public set body_binary(value: string | undefined) {
        this._body_binary = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new activitymimeattachment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the filename property value. 
     * @returns a string
     */
    public get filename() {
        return this._filename;
    };
    /**
     * Sets the filename property value. 
     * @param value Value to set for the filename property.
     */
    public set filename(value: string | undefined) {
        this._filename = value;
    };
    /**
     * Gets the filesize property value. 
     * @returns a integer
     */
    public get filesize() {
        return this._filesize;
    };
    /**
     * Sets the filesize property value. 
     * @param value Value to set for the filesize property.
     */
    public set filesize(value: number | undefined) {
        this._filesize = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_attachmentid_value": (o, n) => { (o as unknown as Activitymimeattachment)._attachmentid_value = n.getStringValue(); },
            "_objectid_value": (o, n) => { (o as unknown as Activitymimeattachment)._objectid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Activitymimeattachment)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Activitymimeattachment)._owningbusinessunit_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Activitymimeattachment)._owninguser_value = n.getStringValue(); },
            "activityMimeAttachment_AsyncOperations": (o, n) => { (o as unknown as Activitymimeattachment).activityMimeAttachment_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "activityMimeAttachment_BulkDeleteFailures": (o, n) => { (o as unknown as Activitymimeattachment).activityMimeAttachment_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "activityMimeAttachment_SyncErrors": (o, n) => { (o as unknown as Activitymimeattachment).activityMimeAttachment_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "activitymimeattachmentid": (o, n) => { (o as unknown as Activitymimeattachment).activitymimeattachmentid = n.getStringValue(); },
            "activitymimeattachmentidunique": (o, n) => { (o as unknown as Activitymimeattachment).activitymimeattachmentidunique = n.getStringValue(); },
            "activitysubject": (o, n) => { (o as unknown as Activitymimeattachment).activitysubject = n.getStringValue(); },
            "anonymouslink": (o, n) => { (o as unknown as Activitymimeattachment).anonymouslink = n.getStringValue(); },
            "attachmentcontentid": (o, n) => { (o as unknown as Activitymimeattachment).attachmentcontentid = n.getStringValue(); },
            "attachmentid": (o, n) => { (o as unknown as Activitymimeattachment).attachmentid = n.getObjectValue<Attachment>(createAttachmentFromDiscriminatorValue); },
            "attachmentnumber": (o, n) => { (o as unknown as Activitymimeattachment).attachmentnumber = n.getNumberValue(); },
            "body": (o, n) => { (o as unknown as Activitymimeattachment).body = n.getStringValue(); },
            "body_binary": (o, n) => { (o as unknown as Activitymimeattachment).body_binary = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Activitymimeattachment).componentstate = n.getNumberValue(); },
            "filename": (o, n) => { (o as unknown as Activitymimeattachment).filename = n.getStringValue(); },
            "filesize": (o, n) => { (o as unknown as Activitymimeattachment).filesize = n.getNumberValue(); },
            "isfollowed": (o, n) => { (o as unknown as Activitymimeattachment).isfollowed = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Activitymimeattachment).ismanaged = n.getBooleanValue(); },
            "mimetype": (o, n) => { (o as unknown as Activitymimeattachment).mimetype = n.getStringValue(); },
            "objectid_activitypointer": (o, n) => { (o as unknown as Activitymimeattachment).objectid_activitypointer = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "objectid_appointment": (o, n) => { (o as unknown as Activitymimeattachment).objectid_appointment = n.getObjectValue<Appointment>(createAppointmentFromDiscriminatorValue); },
            "objectid_email": (o, n) => { (o as unknown as Activitymimeattachment).objectid_email = n.getObjectValue<Email>(createEmailFromDiscriminatorValue); },
            "objectid_template": (o, n) => { (o as unknown as Activitymimeattachment).objectid_template = n.getObjectValue<Template>(createTemplateFromDiscriminatorValue); },
            "objecttypecode": (o, n) => { (o as unknown as Activitymimeattachment).objecttypecode = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Activitymimeattachment).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Activitymimeattachment).solutionid = n.getStringValue(); },
            "subject": (o, n) => { (o as unknown as Activitymimeattachment).subject = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Activitymimeattachment).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isfollowed property value. 
     * @returns a boolean
     */
    public get isfollowed() {
        return this._isfollowed;
    };
    /**
     * Sets the isfollowed property value. 
     * @param value Value to set for the isfollowed property.
     */
    public set isfollowed(value: boolean | undefined) {
        this._isfollowed = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the mimetype property value. 
     * @returns a string
     */
    public get mimetype() {
        return this._mimetype;
    };
    /**
     * Sets the mimetype property value. 
     * @param value Value to set for the mimetype property.
     */
    public set mimetype(value: string | undefined) {
        this._mimetype = value;
    };
    /**
     * Gets the objectid_activitypointer property value. 
     * @returns a activitypointer
     */
    public get objectid_activitypointer() {
        return this._objectid_activitypointer;
    };
    /**
     * Sets the objectid_activitypointer property value. 
     * @param value Value to set for the objectid_activitypointer property.
     */
    public set objectid_activitypointer(value: Activitypointer | undefined) {
        this._objectid_activitypointer = value;
    };
    /**
     * Gets the objectid_appointment property value. 
     * @returns a appointment
     */
    public get objectid_appointment() {
        return this._objectid_appointment;
    };
    /**
     * Sets the objectid_appointment property value. 
     * @param value Value to set for the objectid_appointment property.
     */
    public set objectid_appointment(value: Appointment | undefined) {
        this._objectid_appointment = value;
    };
    /**
     * Gets the objectid_email property value. 
     * @returns a email
     */
    public get objectid_email() {
        return this._objectid_email;
    };
    /**
     * Sets the objectid_email property value. 
     * @param value Value to set for the objectid_email property.
     */
    public set objectid_email(value: Email | undefined) {
        this._objectid_email = value;
    };
    /**
     * Gets the objectid_template property value. 
     * @returns a template
     */
    public get objectid_template() {
        return this._objectid_template;
    };
    /**
     * Sets the objectid_template property value. 
     * @param value Value to set for the objectid_template property.
     */
    public set objectid_template(value: Template | undefined) {
        this._objectid_template = value;
    };
    /**
     * Gets the objecttypecode property value. 
     * @returns a string
     */
    public get objecttypecode() {
        return this._objecttypecode;
    };
    /**
     * Sets the objecttypecode property value. 
     * @param value Value to set for the objecttypecode property.
     */
    public set objecttypecode(value: string | undefined) {
        this._objecttypecode = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_attachmentid_value", this._attachmentid_value);
        writer.writeStringValue("_objectid_value", this._objectid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("activityMimeAttachment_AsyncOperations", this.activityMimeAttachment_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("activityMimeAttachment_BulkDeleteFailures", this.activityMimeAttachment_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Syncerror>("activityMimeAttachment_SyncErrors", this.activityMimeAttachment_SyncErrors);
        writer.writeStringValue("activitymimeattachmentid", this.activitymimeattachmentid);
        writer.writeStringValue("activitymimeattachmentidunique", this.activitymimeattachmentidunique);
        writer.writeStringValue("activitysubject", this.activitysubject);
        writer.writeStringValue("anonymouslink", this.anonymouslink);
        writer.writeStringValue("attachmentcontentid", this.attachmentcontentid);
        writer.writeObjectValue<Attachment>("attachmentid", this.attachmentid);
        writer.writeNumberValue("attachmentnumber", this.attachmentnumber);
        writer.writeStringValue("body", this.body);
        writer.writeStringValue("body_binary", this.body_binary);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("filename", this.filename);
        writer.writeNumberValue("filesize", this.filesize);
        writer.writeBooleanValue("isfollowed", this.isfollowed);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("mimetype", this.mimetype);
        writer.writeObjectValue<Activitypointer>("objectid_activitypointer", this.objectid_activitypointer);
        writer.writeObjectValue<Appointment>("objectid_appointment", this.objectid_appointment);
        writer.writeObjectValue<Email>("objectid_email", this.objectid_email);
        writer.writeObjectValue<Template>("objectid_template", this.objectid_template);
        writer.writeStringValue("objecttypecode", this.objecttypecode);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("subject", this.subject);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the subject property value. 
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. 
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
