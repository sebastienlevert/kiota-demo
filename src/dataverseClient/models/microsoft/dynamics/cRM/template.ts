import {createActivitymimeattachmentFromDiscriminatorValue} from './createActivitymimeattachmentFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createEmailFromDiscriminatorValue} from './createEmailFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Activitymimeattachment, Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Email, Organization, Principal, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Template extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _body?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _email_EmailTemplate?: Email[] | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _generationtypecode?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _ispersonal?: boolean | undefined;
    private _isrecommended?: boolean | undefined;
    private _languagecode?: number | undefined;
    private _mimetype?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _opencount?: number | undefined;
    private _openrate?: number | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _presentationxml?: string | undefined;
    private _replycount?: number | undefined;
    private _replyrate?: number | undefined;
    private _safehtml?: string | undefined;
    private _solutionid?: string | undefined;
    private _subject?: string | undefined;
    private _subjectpresentationxml?: string | undefined;
    private _subjectsafehtml?: string | undefined;
    private _template_activity_mime_attachments?: Activitymimeattachment[] | undefined;
    private _template_AsyncOperations?: Asyncoperation[] | undefined;
    private _template_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _template_Organization?: Organization[] | undefined;
    private _template_ProcessSessions?: Processsession[] | undefined;
    private _template_SyncErrors?: Syncerror[] | undefined;
    private _templateid?: string | undefined;
    private _templateidunique?: string | undefined;
    private _templatetypecode?: string | undefined;
    private _title?: string | undefined;
    private _usedcount?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
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
     * Instantiates a new template and sets the default values.
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the email_EmailTemplate property value. 
     * @returns a email
     */
    public get email_EmailTemplate() {
        return this._email_EmailTemplate;
    };
    /**
     * Sets the email_EmailTemplate property value. 
     * @param value Value to set for the Email_EmailTemplate property.
     */
    public set email_EmailTemplate(value: Email[] | undefined) {
        this._email_EmailTemplate = value;
    };
    /**
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * Gets the generationtypecode property value. 
     * @returns a integer
     */
    public get generationtypecode() {
        return this._generationtypecode;
    };
    /**
     * Sets the generationtypecode property value. 
     * @param value Value to set for the generationtypecode property.
     */
    public set generationtypecode(value: number | undefined) {
        this._generationtypecode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Template)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Template)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Template)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Template)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Template)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Template)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Template)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Template)._owninguser_value = n.getStringValue(); },
            "body": (o, n) => { (o as unknown as Template).body = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Template).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Template).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Template).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Template).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Template).description = n.getStringValue(); },
            "email_EmailTemplate": (o, n) => { (o as unknown as Template).email_EmailTemplate = n.getCollectionOfObjectValues<Email>(createEmailFromDiscriminatorValue); },
            "entityimage": (o, n) => { (o as unknown as Template).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Template).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Template).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Template).entityimageid = n.getStringValue(); },
            "generationtypecode": (o, n) => { (o as unknown as Template).generationtypecode = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Template).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Template).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Template).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Template).ismanaged = n.getBooleanValue(); },
            "ispersonal": (o, n) => { (o as unknown as Template).ispersonal = n.getBooleanValue(); },
            "isrecommended": (o, n) => { (o as unknown as Template).isrecommended = n.getBooleanValue(); },
            "languagecode": (o, n) => { (o as unknown as Template).languagecode = n.getNumberValue(); },
            "mimetype": (o, n) => { (o as unknown as Template).mimetype = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Template).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Template).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Template).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "opencount": (o, n) => { (o as unknown as Template).opencount = n.getNumberValue(); },
            "openrate": (o, n) => { (o as unknown as Template).openrate = n.getNumberValue(); },
            "overwritetime": (o, n) => { (o as unknown as Template).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Template).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Template).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Template).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Template).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "presentationxml": (o, n) => { (o as unknown as Template).presentationxml = n.getStringValue(); },
            "replycount": (o, n) => { (o as unknown as Template).replycount = n.getNumberValue(); },
            "replyrate": (o, n) => { (o as unknown as Template).replyrate = n.getNumberValue(); },
            "safehtml": (o, n) => { (o as unknown as Template).safehtml = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Template).solutionid = n.getStringValue(); },
            "subject": (o, n) => { (o as unknown as Template).subject = n.getStringValue(); },
            "subjectpresentationxml": (o, n) => { (o as unknown as Template).subjectpresentationxml = n.getStringValue(); },
            "subjectsafehtml": (o, n) => { (o as unknown as Template).subjectsafehtml = n.getStringValue(); },
            "template_activity_mime_attachments": (o, n) => { (o as unknown as Template).template_activity_mime_attachments = n.getCollectionOfObjectValues<Activitymimeattachment>(createActivitymimeattachmentFromDiscriminatorValue); },
            "template_AsyncOperations": (o, n) => { (o as unknown as Template).template_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "template_BulkDeleteFailures": (o, n) => { (o as unknown as Template).template_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "template_Organization": (o, n) => { (o as unknown as Template).template_Organization = n.getCollectionOfObjectValues<Organization>(createOrganizationFromDiscriminatorValue); },
            "template_ProcessSessions": (o, n) => { (o as unknown as Template).template_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "template_SyncErrors": (o, n) => { (o as unknown as Template).template_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "templateid": (o, n) => { (o as unknown as Template).templateid = n.getStringValue(); },
            "templateidunique": (o, n) => { (o as unknown as Template).templateidunique = n.getStringValue(); },
            "templatetypecode": (o, n) => { (o as unknown as Template).templatetypecode = n.getStringValue(); },
            "title": (o, n) => { (o as unknown as Template).title = n.getStringValue(); },
            "usedcount": (o, n) => { (o as unknown as Template).usedcount = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Template).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
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
     * Gets the ispersonal property value. 
     * @returns a boolean
     */
    public get ispersonal() {
        return this._ispersonal;
    };
    /**
     * Sets the ispersonal property value. 
     * @param value Value to set for the ispersonal property.
     */
    public set ispersonal(value: boolean | undefined) {
        this._ispersonal = value;
    };
    /**
     * Gets the isrecommended property value. 
     * @returns a boolean
     */
    public get isrecommended() {
        return this._isrecommended;
    };
    /**
     * Sets the isrecommended property value. 
     * @param value Value to set for the isrecommended property.
     */
    public set isrecommended(value: boolean | undefined) {
        this._isrecommended = value;
    };
    /**
     * Gets the languagecode property value. 
     * @returns a integer
     */
    public get languagecode() {
        return this._languagecode;
    };
    /**
     * Sets the languagecode property value. 
     * @param value Value to set for the languagecode property.
     */
    public set languagecode(value: number | undefined) {
        this._languagecode = value;
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
     * Gets the opencount property value. 
     * @returns a integer
     */
    public get opencount() {
        return this._opencount;
    };
    /**
     * Sets the opencount property value. 
     * @param value Value to set for the opencount property.
     */
    public set opencount(value: number | undefined) {
        this._opencount = value;
    };
    /**
     * Gets the openrate property value. 
     * @returns a integer
     */
    public get openrate() {
        return this._openrate;
    };
    /**
     * Sets the openrate property value. 
     * @param value Value to set for the openrate property.
     */
    public set openrate(value: number | undefined) {
        this._openrate = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the presentationxml property value. 
     * @returns a string
     */
    public get presentationxml() {
        return this._presentationxml;
    };
    /**
     * Sets the presentationxml property value. 
     * @param value Value to set for the presentationxml property.
     */
    public set presentationxml(value: string | undefined) {
        this._presentationxml = value;
    };
    /**
     * Gets the replycount property value. 
     * @returns a integer
     */
    public get replycount() {
        return this._replycount;
    };
    /**
     * Sets the replycount property value. 
     * @param value Value to set for the replycount property.
     */
    public set replycount(value: number | undefined) {
        this._replycount = value;
    };
    /**
     * Gets the replyrate property value. 
     * @returns a integer
     */
    public get replyrate() {
        return this._replyrate;
    };
    /**
     * Sets the replyrate property value. 
     * @param value Value to set for the replyrate property.
     */
    public set replyrate(value: number | undefined) {
        this._replyrate = value;
    };
    /**
     * Gets the safehtml property value. 
     * @returns a string
     */
    public get safehtml() {
        return this._safehtml;
    };
    /**
     * Sets the safehtml property value. 
     * @param value Value to set for the safehtml property.
     */
    public set safehtml(value: string | undefined) {
        this._safehtml = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("body", this.body);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<Email>("email_EmailTemplate", this.email_EmailTemplate);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("generationtypecode", this.generationtypecode);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("ispersonal", this.ispersonal);
        writer.writeBooleanValue("isrecommended", this.isrecommended);
        writer.writeNumberValue("languagecode", this.languagecode);
        writer.writeStringValue("mimetype", this.mimetype);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("opencount", this.opencount);
        writer.writeNumberValue("openrate", this.openrate);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("presentationxml", this.presentationxml);
        writer.writeNumberValue("replycount", this.replycount);
        writer.writeNumberValue("replyrate", this.replyrate);
        writer.writeStringValue("safehtml", this.safehtml);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("subjectpresentationxml", this.subjectpresentationxml);
        writer.writeStringValue("subjectsafehtml", this.subjectsafehtml);
        writer.writeCollectionOfObjectValues<Activitymimeattachment>("template_activity_mime_attachments", this.template_activity_mime_attachments);
        writer.writeCollectionOfObjectValues<Asyncoperation>("template_AsyncOperations", this.template_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("template_BulkDeleteFailures", this.template_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Organization>("template_Organization", this.template_Organization);
        writer.writeCollectionOfObjectValues<Processsession>("template_ProcessSessions", this.template_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("template_SyncErrors", this.template_SyncErrors);
        writer.writeStringValue("templateid", this.templateid);
        writer.writeStringValue("templateidunique", this.templateidunique);
        writer.writeStringValue("templatetypecode", this.templatetypecode);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("usedcount", this.usedcount);
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
     * Gets the subjectpresentationxml property value. 
     * @returns a string
     */
    public get subjectpresentationxml() {
        return this._subjectpresentationxml;
    };
    /**
     * Sets the subjectpresentationxml property value. 
     * @param value Value to set for the subjectpresentationxml property.
     */
    public set subjectpresentationxml(value: string | undefined) {
        this._subjectpresentationxml = value;
    };
    /**
     * Gets the subjectsafehtml property value. 
     * @returns a string
     */
    public get subjectsafehtml() {
        return this._subjectsafehtml;
    };
    /**
     * Sets the subjectsafehtml property value. 
     * @param value Value to set for the subjectsafehtml property.
     */
    public set subjectsafehtml(value: string | undefined) {
        this._subjectsafehtml = value;
    };
    /**
     * Gets the template_activity_mime_attachments property value. 
     * @returns a activitymimeattachment
     */
    public get template_activity_mime_attachments() {
        return this._template_activity_mime_attachments;
    };
    /**
     * Sets the template_activity_mime_attachments property value. 
     * @param value Value to set for the template_activity_mime_attachments property.
     */
    public set template_activity_mime_attachments(value: Activitymimeattachment[] | undefined) {
        this._template_activity_mime_attachments = value;
    };
    /**
     * Gets the template_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get template_AsyncOperations() {
        return this._template_AsyncOperations;
    };
    /**
     * Sets the template_AsyncOperations property value. 
     * @param value Value to set for the Template_AsyncOperations property.
     */
    public set template_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._template_AsyncOperations = value;
    };
    /**
     * Gets the template_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get template_BulkDeleteFailures() {
        return this._template_BulkDeleteFailures;
    };
    /**
     * Sets the template_BulkDeleteFailures property value. 
     * @param value Value to set for the Template_BulkDeleteFailures property.
     */
    public set template_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._template_BulkDeleteFailures = value;
    };
    /**
     * Gets the template_Organization property value. 
     * @returns a organization
     */
    public get template_Organization() {
        return this._template_Organization;
    };
    /**
     * Sets the template_Organization property value. 
     * @param value Value to set for the Template_Organization property.
     */
    public set template_Organization(value: Organization[] | undefined) {
        this._template_Organization = value;
    };
    /**
     * Gets the template_ProcessSessions property value. 
     * @returns a processsession
     */
    public get template_ProcessSessions() {
        return this._template_ProcessSessions;
    };
    /**
     * Sets the template_ProcessSessions property value. 
     * @param value Value to set for the Template_ProcessSessions property.
     */
    public set template_ProcessSessions(value: Processsession[] | undefined) {
        this._template_ProcessSessions = value;
    };
    /**
     * Gets the template_SyncErrors property value. 
     * @returns a syncerror
     */
    public get template_SyncErrors() {
        return this._template_SyncErrors;
    };
    /**
     * Sets the template_SyncErrors property value. 
     * @param value Value to set for the Template_SyncErrors property.
     */
    public set template_SyncErrors(value: Syncerror[] | undefined) {
        this._template_SyncErrors = value;
    };
    /**
     * Gets the templateid property value. 
     * @returns a string
     */
    public get templateid() {
        return this._templateid;
    };
    /**
     * Sets the templateid property value. 
     * @param value Value to set for the templateid property.
     */
    public set templateid(value: string | undefined) {
        this._templateid = value;
    };
    /**
     * Gets the templateidunique property value. 
     * @returns a string
     */
    public get templateidunique() {
        return this._templateidunique;
    };
    /**
     * Sets the templateidunique property value. 
     * @param value Value to set for the templateidunique property.
     */
    public set templateidunique(value: string | undefined) {
        this._templateidunique = value;
    };
    /**
     * Gets the templatetypecode property value. 
     * @returns a string
     */
    public get templatetypecode() {
        return this._templatetypecode;
    };
    /**
     * Sets the templatetypecode property value. 
     * @param value Value to set for the templatetypecode property.
     */
    public set templatetypecode(value: string | undefined) {
        this._templatetypecode = value;
    };
    /**
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the usedcount property value. 
     * @returns a integer
     */
    public get usedcount() {
        return this._usedcount;
    };
    /**
     * Sets the usedcount property value. 
     * @param value Value to set for the usedcount property.
     */
    public set usedcount(value: number | undefined) {
        this._usedcount = value;
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
