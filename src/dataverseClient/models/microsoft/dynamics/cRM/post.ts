import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createActivityfileattachmentFromDiscriminatorValue} from './createActivityfileattachmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createCompetitorFromDiscriminatorValue} from './createCompetitorFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPostcommentFromDiscriminatorValue} from './createPostcommentFromDiscriminatorValue';
import {createPostlikeFromDiscriminatorValue} from './createPostlikeFromDiscriminatorValue';
import {createPostregardingFromDiscriminatorValue} from './createPostregardingFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Account, Activityfileattachment, Asyncoperation, Bulkdeletefailure, Competitor, Contact, Crmbaseentity, Incident, Knowledgearticle, Lead, Opportunity, Organization, Postcomment, Postlike, Postregarding, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Post extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private __regardingobjectownerid_value?: string | undefined;
    private __regardingobjectowningbusinessunit_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _largetext?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _post_activity_file_attachment?: Activityfileattachment[] | undefined;
    private _post_AsyncOperations?: Asyncoperation[] | undefined;
    private _post_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _post_Comments?: Postcomment[] | undefined;
    private _post_Likes?: Postlike[] | undefined;
    private _postid?: string | undefined;
    private _postregardingid?: Postregarding | undefined;
    private _regardingobjectid_account?: Account | undefined;
    private _regardingobjectid_competitor?: Competitor | undefined;
    private _regardingobjectid_contact?: Contact | undefined;
    private _regardingobjectid_incident?: Incident | undefined;
    private _regardingobjectid_knowledgearticle?: Knowledgearticle | undefined;
    private _regardingobjectid_lead?: Lead | undefined;
    private _regardingobjectid_opportunity?: Opportunity | undefined;
    private _regardingobjectid_systemuser?: Systemuser | undefined;
    private _source?: number | undefined;
    private _text?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _type?: number | undefined;
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
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
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
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
    };
    /**
     * Gets the _regardingobjectownerid_value property value. 
     * @returns a string
     */
    public get _regardingobjectownerid_value() {
        return this.__regardingobjectownerid_value;
    };
    /**
     * Sets the _regardingobjectownerid_value property value. 
     * @param value Value to set for the _regardingobjectownerid_value property.
     */
    public set _regardingobjectownerid_value(value: string | undefined) {
        this.__regardingobjectownerid_value = value;
    };
    /**
     * Gets the _regardingobjectowningbusinessunit_value property value. 
     * @returns a string
     */
    public get _regardingobjectowningbusinessunit_value() {
        return this.__regardingobjectowningbusinessunit_value;
    };
    /**
     * Sets the _regardingobjectowningbusinessunit_value property value. 
     * @param value Value to set for the _regardingobjectowningbusinessunit_value property.
     */
    public set _regardingobjectowningbusinessunit_value(value: string | undefined) {
        this.__regardingobjectowningbusinessunit_value = value;
    };
    /**
     * Instantiates a new post and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Post)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Post)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Post)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Post)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Post)._organizationid_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Post)._regardingobjectid_value = n.getStringValue(); },
            "_regardingobjectownerid_value": (o, n) => { (o as unknown as Post)._regardingobjectownerid_value = n.getStringValue(); },
            "_regardingobjectowningbusinessunit_value": (o, n) => { (o as unknown as Post)._regardingobjectowningbusinessunit_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Post).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Post).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Post).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "largetext": (o, n) => { (o as unknown as Post).largetext = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Post).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Post).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Post).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Post).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "post_activity_file_attachment": (o, n) => { (o as unknown as Post).post_activity_file_attachment = n.getCollectionOfObjectValues<Activityfileattachment>(createActivityfileattachmentFromDiscriminatorValue); },
            "post_AsyncOperations": (o, n) => { (o as unknown as Post).post_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "post_BulkDeleteFailures": (o, n) => { (o as unknown as Post).post_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "post_Comments": (o, n) => { (o as unknown as Post).post_Comments = n.getCollectionOfObjectValues<Postcomment>(createPostcommentFromDiscriminatorValue); },
            "post_Likes": (o, n) => { (o as unknown as Post).post_Likes = n.getCollectionOfObjectValues<Postlike>(createPostlikeFromDiscriminatorValue); },
            "postid": (o, n) => { (o as unknown as Post).postid = n.getStringValue(); },
            "postregardingid": (o, n) => { (o as unknown as Post).postregardingid = n.getObjectValue<Postregarding>(createPostregardingFromDiscriminatorValue); },
            "regardingobjectid_account": (o, n) => { (o as unknown as Post).regardingobjectid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_competitor": (o, n) => { (o as unknown as Post).regardingobjectid_competitor = n.getObjectValue<Competitor>(createCompetitorFromDiscriminatorValue); },
            "regardingobjectid_contact": (o, n) => { (o as unknown as Post).regardingobjectid_contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "regardingobjectid_incident": (o, n) => { (o as unknown as Post).regardingobjectid_incident = n.getObjectValue<Incident>(createIncidentFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle": (o, n) => { (o as unknown as Post).regardingobjectid_knowledgearticle = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_lead": (o, n) => { (o as unknown as Post).regardingobjectid_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_opportunity": (o, n) => { (o as unknown as Post).regardingobjectid_opportunity = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regardingobjectid_systemuser": (o, n) => { (o as unknown as Post).regardingobjectid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "source": (o, n) => { (o as unknown as Post).source = n.getNumberValue(); },
            "text": (o, n) => { (o as unknown as Post).text = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Post).timezoneruleversionnumber = n.getNumberValue(); },
            "type": (o, n) => { (o as unknown as Post).type = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Post).utcconversiontimezonecode = n.getNumberValue(); },
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
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
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
     * Gets the post_activity_file_attachment property value. 
     * @returns a activityfileattachment
     */
    public get post_activity_file_attachment() {
        return this._post_activity_file_attachment;
    };
    /**
     * Sets the post_activity_file_attachment property value. 
     * @param value Value to set for the post_activity_file_attachment property.
     */
    public set post_activity_file_attachment(value: Activityfileattachment[] | undefined) {
        this._post_activity_file_attachment = value;
    };
    /**
     * Gets the post_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get post_AsyncOperations() {
        return this._post_AsyncOperations;
    };
    /**
     * Sets the post_AsyncOperations property value. 
     * @param value Value to set for the post_AsyncOperations property.
     */
    public set post_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._post_AsyncOperations = value;
    };
    /**
     * Gets the post_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get post_BulkDeleteFailures() {
        return this._post_BulkDeleteFailures;
    };
    /**
     * Sets the post_BulkDeleteFailures property value. 
     * @param value Value to set for the post_BulkDeleteFailures property.
     */
    public set post_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._post_BulkDeleteFailures = value;
    };
    /**
     * Gets the post_Comments property value. 
     * @returns a postcomment
     */
    public get post_Comments() {
        return this._post_Comments;
    };
    /**
     * Sets the post_Comments property value. 
     * @param value Value to set for the Post_Comments property.
     */
    public set post_Comments(value: Postcomment[] | undefined) {
        this._post_Comments = value;
    };
    /**
     * Gets the post_Likes property value. 
     * @returns a postlike
     */
    public get post_Likes() {
        return this._post_Likes;
    };
    /**
     * Sets the post_Likes property value. 
     * @param value Value to set for the Post_Likes property.
     */
    public set post_Likes(value: Postlike[] | undefined) {
        this._post_Likes = value;
    };
    /**
     * Gets the postid property value. 
     * @returns a string
     */
    public get postid() {
        return this._postid;
    };
    /**
     * Sets the postid property value. 
     * @param value Value to set for the postid property.
     */
    public set postid(value: string | undefined) {
        this._postid = value;
    };
    /**
     * Gets the postregardingid property value. 
     * @returns a postregarding
     */
    public get postregardingid() {
        return this._postregardingid;
    };
    /**
     * Sets the postregardingid property value. 
     * @param value Value to set for the postregardingid property.
     */
    public set postregardingid(value: Postregarding | undefined) {
        this._postregardingid = value;
    };
    /**
     * Gets the regardingobjectid_account property value. 
     * @returns a account
     */
    public get regardingobjectid_account() {
        return this._regardingobjectid_account;
    };
    /**
     * Sets the regardingobjectid_account property value. 
     * @param value Value to set for the regardingobjectid_account property.
     */
    public set regardingobjectid_account(value: Account | undefined) {
        this._regardingobjectid_account = value;
    };
    /**
     * Gets the regardingobjectid_competitor property value. 
     * @returns a competitor
     */
    public get regardingobjectid_competitor() {
        return this._regardingobjectid_competitor;
    };
    /**
     * Sets the regardingobjectid_competitor property value. 
     * @param value Value to set for the regardingobjectid_competitor property.
     */
    public set regardingobjectid_competitor(value: Competitor | undefined) {
        this._regardingobjectid_competitor = value;
    };
    /**
     * Gets the regardingobjectid_contact property value. 
     * @returns a contact
     */
    public get regardingobjectid_contact() {
        return this._regardingobjectid_contact;
    };
    /**
     * Sets the regardingobjectid_contact property value. 
     * @param value Value to set for the regardingobjectid_contact property.
     */
    public set regardingobjectid_contact(value: Contact | undefined) {
        this._regardingobjectid_contact = value;
    };
    /**
     * Gets the regardingobjectid_incident property value. 
     * @returns a incident
     */
    public get regardingobjectid_incident() {
        return this._regardingobjectid_incident;
    };
    /**
     * Sets the regardingobjectid_incident property value. 
     * @param value Value to set for the regardingobjectid_incident property.
     */
    public set regardingobjectid_incident(value: Incident | undefined) {
        this._regardingobjectid_incident = value;
    };
    /**
     * Gets the regardingobjectid_knowledgearticle property value. 
     * @returns a knowledgearticle
     */
    public get regardingobjectid_knowledgearticle() {
        return this._regardingobjectid_knowledgearticle;
    };
    /**
     * Sets the regardingobjectid_knowledgearticle property value. 
     * @param value Value to set for the regardingobjectid_knowledgearticle property.
     */
    public set regardingobjectid_knowledgearticle(value: Knowledgearticle | undefined) {
        this._regardingobjectid_knowledgearticle = value;
    };
    /**
     * Gets the regardingobjectid_lead property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead() {
        return this._regardingobjectid_lead;
    };
    /**
     * Sets the regardingobjectid_lead property value. 
     * @param value Value to set for the regardingobjectid_lead property.
     */
    public set regardingobjectid_lead(value: Lead | undefined) {
        this._regardingobjectid_lead = value;
    };
    /**
     * Gets the regardingobjectid_opportunity property value. 
     * @returns a opportunity
     */
    public get regardingobjectid_opportunity() {
        return this._regardingobjectid_opportunity;
    };
    /**
     * Sets the regardingobjectid_opportunity property value. 
     * @param value Value to set for the regardingobjectid_opportunity property.
     */
    public set regardingobjectid_opportunity(value: Opportunity | undefined) {
        this._regardingobjectid_opportunity = value;
    };
    /**
     * Gets the regardingobjectid_systemuser property value. 
     * @returns a systemuser
     */
    public get regardingobjectid_systemuser() {
        return this._regardingobjectid_systemuser;
    };
    /**
     * Sets the regardingobjectid_systemuser property value. 
     * @param value Value to set for the regardingobjectid_systemuser property.
     */
    public set regardingobjectid_systemuser(value: Systemuser | undefined) {
        this._regardingobjectid_systemuser = value;
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_regardingobjectownerid_value", this._regardingobjectownerid_value);
        writer.writeStringValue("_regardingobjectowningbusinessunit_value", this._regardingobjectowningbusinessunit_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("largetext", this.largetext);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeCollectionOfObjectValues<Activityfileattachment>("post_activity_file_attachment", this.post_activity_file_attachment);
        writer.writeCollectionOfObjectValues<Asyncoperation>("post_AsyncOperations", this.post_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("post_BulkDeleteFailures", this.post_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Postcomment>("post_Comments", this.post_Comments);
        writer.writeCollectionOfObjectValues<Postlike>("post_Likes", this.post_Likes);
        writer.writeStringValue("postid", this.postid);
        writer.writeObjectValue<Postregarding>("postregardingid", this.postregardingid);
        writer.writeObjectValue<Account>("regardingobjectid_account", this.regardingobjectid_account);
        writer.writeObjectValue<Competitor>("regardingobjectid_competitor", this.regardingobjectid_competitor);
        writer.writeObjectValue<Contact>("regardingobjectid_contact", this.regardingobjectid_contact);
        writer.writeObjectValue<Incident>("regardingobjectid_incident", this.regardingobjectid_incident);
        writer.writeObjectValue<Knowledgearticle>("regardingobjectid_knowledgearticle", this.regardingobjectid_knowledgearticle);
        writer.writeObjectValue<Lead>("regardingobjectid_lead", this.regardingobjectid_lead);
        writer.writeObjectValue<Opportunity>("regardingobjectid_opportunity", this.regardingobjectid_opportunity);
        writer.writeObjectValue<Systemuser>("regardingobjectid_systemuser", this.regardingobjectid_systemuser);
        writer.writeNumberValue("source", this.source);
        writer.writeStringValue("text", this.text);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("type", this.type);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
    };
    /**
     * Gets the source property value. 
     * @returns a integer
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. 
     * @param value Value to set for the source property.
     */
    public set source(value: number | undefined) {
        this._source = value;
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
     * Gets the type property value. 
     * @returns a integer
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        this._type = value;
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
