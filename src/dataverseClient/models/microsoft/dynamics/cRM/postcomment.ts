import {createActivityfileattachmentFromDiscriminatorValue} from './createActivityfileattachmentFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPostFromDiscriminatorValue} from './createPostFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Activityfileattachment, Crmbaseentity, Organization, Post, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Postcomment extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __postid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _largetext?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _post_comment_activity_file_attachment?: Activityfileattachment[] | undefined;
    private _postcommentid?: string | undefined;
    private _postid?: Post | undefined;
    private _text?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the _postid_value property value. 
     * @returns a string
     */
    public get _postid_value() {
        return this.__postid_value;
    };
    /**
     * Sets the _postid_value property value. 
     * @param value Value to set for the _postid_value property.
     */
    public set _postid_value(value: string | undefined) {
        this.__postid_value = value;
    };
    /**
     * Instantiates a new postcomment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Postcomment)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Postcomment)._createdonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Postcomment)._organizationid_value = n.getStringValue(); },
            "_postid_value": (o, n) => { (o as unknown as Postcomment)._postid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Postcomment).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Postcomment).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Postcomment).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "largetext": (o, n) => { (o as unknown as Postcomment).largetext = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Postcomment).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "post_comment_activity_file_attachment": (o, n) => { (o as unknown as Postcomment).post_comment_activity_file_attachment = n.getCollectionOfObjectValues<Activityfileattachment>(createActivityfileattachmentFromDiscriminatorValue); },
            "postcommentid": (o, n) => { (o as unknown as Postcomment).postcommentid = n.getStringValue(); },
            "postid": (o, n) => { (o as unknown as Postcomment).postid = n.getObjectValue<Post>(createPostFromDiscriminatorValue); },
            "text": (o, n) => { (o as unknown as Postcomment).text = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Postcomment).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Postcomment).utcconversiontimezonecode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the largetext property value. 
     * @returns a string
     */
    public get largetext() {
        return this._largetext;
    };
    /**
     * Sets the largetext property value. 
     * @param value Value to set for the largetext property.
     */
    public set largetext(value: string | undefined) {
        this._largetext = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the post_comment_activity_file_attachment property value. 
     * @returns a activityfileattachment
     */
    public get post_comment_activity_file_attachment() {
        return this._post_comment_activity_file_attachment;
    };
    /**
     * Sets the post_comment_activity_file_attachment property value. 
     * @param value Value to set for the post_comment_activity_file_attachment property.
     */
    public set post_comment_activity_file_attachment(value: Activityfileattachment[] | undefined) {
        this._post_comment_activity_file_attachment = value;
    };
    /**
     * Gets the postcommentid property value. 
     * @returns a string
     */
    public get postcommentid() {
        return this._postcommentid;
    };
    /**
     * Sets the postcommentid property value. 
     * @param value Value to set for the postcommentid property.
     */
    public set postcommentid(value: string | undefined) {
        this._postcommentid = value;
    };
    /**
     * Gets the postid property value. 
     * @returns a post
     */
    public get postid() {
        return this._postid;
    };
    /**
     * Sets the postid property value. 
     * @param value Value to set for the postid property.
     */
    public set postid(value: Post | undefined) {
        this._postid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_postid_value", this._postid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("largetext", this.largetext);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeCollectionOfObjectValues<Activityfileattachment>("post_comment_activity_file_attachment", this.post_comment_activity_file_attachment);
        writer.writeStringValue("postcommentid", this.postcommentid);
        writer.writeObjectValue<Post>("postid", this.postid);
        writer.writeStringValue("text", this.text);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
    };
    /**
     * Gets the text property value. 
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. 
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
}
