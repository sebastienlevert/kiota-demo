import {createActivitymimeattachmentFromDiscriminatorValue} from './createActivitymimeattachmentFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {Activitymimeattachment, Crmbaseentity, Syncerror} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Attachment extends Crmbaseentity implements Parsable {
    private _attachment_activity_mime_attachments?: Activitymimeattachment[] | undefined;
    private _attachment_SyncErrors?: Syncerror[] | undefined;
    private _attachmentid?: string | undefined;
    private _body?: string | undefined;
    private _body_binary?: string | undefined;
    private _filename?: string | undefined;
    private _filesize?: number | undefined;
    private _mimetype?: string | undefined;
    private _prefix?: string | undefined;
    private _subject?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the attachment_activity_mime_attachments property value. 
     * @returns a activitymimeattachment
     */
    public get attachment_activity_mime_attachments() {
        return this._attachment_activity_mime_attachments;
    };
    /**
     * Sets the attachment_activity_mime_attachments property value. 
     * @param value Value to set for the attachment_activity_mime_attachments property.
     */
    public set attachment_activity_mime_attachments(value: Activitymimeattachment[] | undefined) {
        this._attachment_activity_mime_attachments = value;
    };
    /**
     * Gets the attachment_SyncErrors property value. 
     * @returns a syncerror
     */
    public get attachment_SyncErrors() {
        return this._attachment_SyncErrors;
    };
    /**
     * Sets the attachment_SyncErrors property value. 
     * @param value Value to set for the Attachment_SyncErrors property.
     */
    public set attachment_SyncErrors(value: Syncerror[] | undefined) {
        this._attachment_SyncErrors = value;
    };
    /**
     * Gets the attachmentid property value. 
     * @returns a string
     */
    public get attachmentid() {
        return this._attachmentid;
    };
    /**
     * Sets the attachmentid property value. 
     * @param value Value to set for the attachmentid property.
     */
    public set attachmentid(value: string | undefined) {
        this._attachmentid = value;
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
     * Instantiates a new attachment and sets the default values.
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
            "attachment_activity_mime_attachments": (o, n) => { (o as unknown as Attachment).attachment_activity_mime_attachments = n.getCollectionOfObjectValues<Activitymimeattachment>(createActivitymimeattachmentFromDiscriminatorValue); },
            "attachment_SyncErrors": (o, n) => { (o as unknown as Attachment).attachment_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "attachmentid": (o, n) => { (o as unknown as Attachment).attachmentid = n.getStringValue(); },
            "body": (o, n) => { (o as unknown as Attachment).body = n.getStringValue(); },
            "body_binary": (o, n) => { (o as unknown as Attachment).body_binary = n.getStringValue(); },
            "filename": (o, n) => { (o as unknown as Attachment).filename = n.getStringValue(); },
            "filesize": (o, n) => { (o as unknown as Attachment).filesize = n.getNumberValue(); },
            "mimetype": (o, n) => { (o as unknown as Attachment).mimetype = n.getStringValue(); },
            "prefix": (o, n) => { (o as unknown as Attachment).prefix = n.getStringValue(); },
            "subject": (o, n) => { (o as unknown as Attachment).subject = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Attachment).versionnumber = n.getNumberValue(); },
        };
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
     * Gets the prefix property value. 
     * @returns a string
     */
    public get prefix() {
        return this._prefix;
    };
    /**
     * Sets the prefix property value. 
     * @param value Value to set for the prefix property.
     */
    public set prefix(value: string | undefined) {
        this._prefix = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Activitymimeattachment>("attachment_activity_mime_attachments", this.attachment_activity_mime_attachments);
        writer.writeCollectionOfObjectValues<Syncerror>("attachment_SyncErrors", this.attachment_SyncErrors);
        writer.writeStringValue("attachmentid", this.attachmentid);
        writer.writeStringValue("body", this.body);
        writer.writeStringValue("body_binary", this.body_binary);
        writer.writeStringValue("filename", this.filename);
        writer.writeNumberValue("filesize", this.filesize);
        writer.writeStringValue("mimetype", this.mimetype);
        writer.writeStringValue("prefix", this.prefix);
        writer.writeStringValue("subject", this.subject);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
