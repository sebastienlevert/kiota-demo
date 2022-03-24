import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createKeyvaultreferenceFromDiscriminatorValue} from './createKeyvaultreferenceFromDiscriminatorValue';
import {createMailboxFromDiscriminatorValue} from './createMailboxFromDiscriminatorValue';
import {createManagedidentityFromDiscriminatorValue} from './createManagedidentityFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTracelogFromDiscriminatorValue} from './createTracelogFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Keyvaultreference, Mailbox, Managedidentity, Organization, Principal, Syncerror, Systemuser, Team, Tracelog} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Emailserverprofile extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __incomingpartnerapplication_value?: string | undefined;
    private __keyvaultreferenceid_value?: string | undefined;
    private __managedidentityid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __outgoingpartnerapplication_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _aadresourceid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _defaultserverlocation?: string | undefined;
    private _description?: string | undefined;
    private _emailServerProfile_Annotation?: Annotation[] | undefined;
    private _emailserverprofile_asyncoperations?: Asyncoperation[] | undefined;
    private _emailserverprofile_bulkdeletefailures?: Bulkdeletefailure[] | undefined;
    private _emailserverprofile_duplicatebaserecord?: Duplicaterecord[] | undefined;
    private _emailserverprofile_duplicatematchingrecord?: Duplicaterecord[] | undefined;
    private _emailserverprofile_mailbox?: Mailbox[] | undefined;
    private _emailServerProfile_Organization?: Organization[] | undefined;
    private _emailServerProfile_SyncErrors?: Syncerror[] | undefined;
    private _emailserverprofileid?: string | undefined;
    private _emailservertypename?: string | undefined;
    private _encodingcodepage?: string | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangeonlinetenantid?: string | undefined;
    private _exchangeversion?: number | undefined;
    private _incomingauthenticationprotocol?: number | undefined;
    private _incomingcredentialretrieval?: number | undefined;
    private _incomingpassword?: string | undefined;
    private _incomingportnumber?: number | undefined;
    private _incomingserverlocation?: string | undefined;
    private _incominguseimpersonation?: boolean | undefined;
    private _incomingusername?: string | undefined;
    private _incomingusessl?: boolean | undefined;
    private _isincomingpasswordset?: boolean | undefined;
    private _isoauthclientsecretset?: boolean | undefined;
    private _isoutgoingpasswordset?: boolean | undefined;
    private _keyvaultreferenceid?: Keyvaultreference | undefined;
    private _lastauthorizationstatus?: number | undefined;
    private _lastcrmmessage?: string | undefined;
    private _lasttestexecutionstatus?: number | undefined;
    private _lasttestrequest?: string | undefined;
    private _lasttestresponse?: string | undefined;
    private _lastteststarttime?: Date | undefined;
    private _lasttesttotalexecutiontime?: number | undefined;
    private _lasttestvalidationstatus?: number | undefined;
    private _managedidentityid?: Managedidentity | undefined;
    private _maxconcurrentconnections?: number | undefined;
    private _minpollingintervalinminutes?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _moveundeliveredemails?: boolean | undefined;
    private _name?: string | undefined;
    private _oauthclientid?: string | undefined;
    private _oauthclientsecret?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _outgoingauthenticationprotocol?: number | undefined;
    private _outgoingautograntdelegateaccess?: boolean | undefined;
    private _outgoingcredentialretrieval?: number | undefined;
    private _outgoingpassword?: string | undefined;
    private _outgoingportnumber?: number | undefined;
    private _outgoingserverlocation?: string | undefined;
    private _outgoinguseimpersonation?: boolean | undefined;
    private _outgoingusername?: string | undefined;
    private _outgoingusessl?: boolean | undefined;
    private _owneremailaddress?: string | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _processemailsreceivedafter?: Date | undefined;
    private _sendemailalert?: boolean | undefined;
    private _servertype?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timeoutmailboxconnection?: boolean | undefined;
    private _timeoutmailboxconnectionafteramount?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _tracelog_EmailServerProfile?: Tracelog[] | undefined;
    private _useautodiscover?: boolean | undefined;
    private _usedefaulttenantid?: boolean | undefined;
    private _usesamesettingsforoutgoingconnections?: boolean | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _incomingpartnerapplication_value property value. 
     * @returns a string
     */
    public get _incomingpartnerapplication_value() {
        return this.__incomingpartnerapplication_value;
    };
    /**
     * Sets the _incomingpartnerapplication_value property value. 
     * @param value Value to set for the _incomingpartnerapplication_value property.
     */
    public set _incomingpartnerapplication_value(value: string | undefined) {
        this.__incomingpartnerapplication_value = value;
    };
    /**
     * Gets the _keyvaultreferenceid_value property value. 
     * @returns a string
     */
    public get _keyvaultreferenceid_value() {
        return this.__keyvaultreferenceid_value;
    };
    /**
     * Sets the _keyvaultreferenceid_value property value. 
     * @param value Value to set for the _keyvaultreferenceid_value property.
     */
    public set _keyvaultreferenceid_value(value: string | undefined) {
        this.__keyvaultreferenceid_value = value;
    };
    /**
     * Gets the _managedidentityid_value property value. 
     * @returns a string
     */
    public get _managedidentityid_value() {
        return this.__managedidentityid_value;
    };
    /**
     * Sets the _managedidentityid_value property value. 
     * @param value Value to set for the _managedidentityid_value property.
     */
    public set _managedidentityid_value(value: string | undefined) {
        this.__managedidentityid_value = value;
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
     * Gets the _outgoingpartnerapplication_value property value. 
     * @returns a string
     */
    public get _outgoingpartnerapplication_value() {
        return this.__outgoingpartnerapplication_value;
    };
    /**
     * Sets the _outgoingpartnerapplication_value property value. 
     * @param value Value to set for the _outgoingpartnerapplication_value property.
     */
    public set _outgoingpartnerapplication_value(value: string | undefined) {
        this.__outgoingpartnerapplication_value = value;
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
     * Gets the aadresourceid property value. 
     * @returns a string
     */
    public get aadresourceid() {
        return this._aadresourceid;
    };
    /**
     * Sets the aadresourceid property value. 
     * @param value Value to set for the aadresourceid property.
     */
    public set aadresourceid(value: string | undefined) {
        this._aadresourceid = value;
    };
    /**
     * Instantiates a new emailserverprofile and sets the default values.
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
     * Gets the defaultserverlocation property value. 
     * @returns a string
     */
    public get defaultserverlocation() {
        return this._defaultserverlocation;
    };
    /**
     * Sets the defaultserverlocation property value. 
     * @param value Value to set for the defaultserverlocation property.
     */
    public set defaultserverlocation(value: string | undefined) {
        this._defaultserverlocation = value;
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
     * Gets the emailServerProfile_Annotation property value. 
     * @returns a annotation
     */
    public get emailServerProfile_Annotation() {
        return this._emailServerProfile_Annotation;
    };
    /**
     * Sets the emailServerProfile_Annotation property value. 
     * @param value Value to set for the EmailServerProfile_Annotation property.
     */
    public set emailServerProfile_Annotation(value: Annotation[] | undefined) {
        this._emailServerProfile_Annotation = value;
    };
    /**
     * Gets the emailserverprofile_asyncoperations property value. 
     * @returns a asyncoperation
     */
    public get emailserverprofile_asyncoperations() {
        return this._emailserverprofile_asyncoperations;
    };
    /**
     * Sets the emailserverprofile_asyncoperations property value. 
     * @param value Value to set for the emailserverprofile_asyncoperations property.
     */
    public set emailserverprofile_asyncoperations(value: Asyncoperation[] | undefined) {
        this._emailserverprofile_asyncoperations = value;
    };
    /**
     * Gets the emailserverprofile_bulkdeletefailures property value. 
     * @returns a bulkdeletefailure
     */
    public get emailserverprofile_bulkdeletefailures() {
        return this._emailserverprofile_bulkdeletefailures;
    };
    /**
     * Sets the emailserverprofile_bulkdeletefailures property value. 
     * @param value Value to set for the emailserverprofile_bulkdeletefailures property.
     */
    public set emailserverprofile_bulkdeletefailures(value: Bulkdeletefailure[] | undefined) {
        this._emailserverprofile_bulkdeletefailures = value;
    };
    /**
     * Gets the emailserverprofile_duplicatebaserecord property value. 
     * @returns a duplicaterecord
     */
    public get emailserverprofile_duplicatebaserecord() {
        return this._emailserverprofile_duplicatebaserecord;
    };
    /**
     * Sets the emailserverprofile_duplicatebaserecord property value. 
     * @param value Value to set for the emailserverprofile_duplicatebaserecord property.
     */
    public set emailserverprofile_duplicatebaserecord(value: Duplicaterecord[] | undefined) {
        this._emailserverprofile_duplicatebaserecord = value;
    };
    /**
     * Gets the emailserverprofile_duplicatematchingrecord property value. 
     * @returns a duplicaterecord
     */
    public get emailserverprofile_duplicatematchingrecord() {
        return this._emailserverprofile_duplicatematchingrecord;
    };
    /**
     * Sets the emailserverprofile_duplicatematchingrecord property value. 
     * @param value Value to set for the emailserverprofile_duplicatematchingrecord property.
     */
    public set emailserverprofile_duplicatematchingrecord(value: Duplicaterecord[] | undefined) {
        this._emailserverprofile_duplicatematchingrecord = value;
    };
    /**
     * Gets the emailserverprofile_mailbox property value. 
     * @returns a mailbox
     */
    public get emailserverprofile_mailbox() {
        return this._emailserverprofile_mailbox;
    };
    /**
     * Sets the emailserverprofile_mailbox property value. 
     * @param value Value to set for the emailserverprofile_mailbox property.
     */
    public set emailserverprofile_mailbox(value: Mailbox[] | undefined) {
        this._emailserverprofile_mailbox = value;
    };
    /**
     * Gets the emailServerProfile_Organization property value. 
     * @returns a organization
     */
    public get emailServerProfile_Organization() {
        return this._emailServerProfile_Organization;
    };
    /**
     * Sets the emailServerProfile_Organization property value. 
     * @param value Value to set for the EmailServerProfile_Organization property.
     */
    public set emailServerProfile_Organization(value: Organization[] | undefined) {
        this._emailServerProfile_Organization = value;
    };
    /**
     * Gets the emailServerProfile_SyncErrors property value. 
     * @returns a syncerror
     */
    public get emailServerProfile_SyncErrors() {
        return this._emailServerProfile_SyncErrors;
    };
    /**
     * Sets the emailServerProfile_SyncErrors property value. 
     * @param value Value to set for the EmailServerProfile_SyncErrors property.
     */
    public set emailServerProfile_SyncErrors(value: Syncerror[] | undefined) {
        this._emailServerProfile_SyncErrors = value;
    };
    /**
     * Gets the emailserverprofileid property value. 
     * @returns a string
     */
    public get emailserverprofileid() {
        return this._emailserverprofileid;
    };
    /**
     * Sets the emailserverprofileid property value. 
     * @param value Value to set for the emailserverprofileid property.
     */
    public set emailserverprofileid(value: string | undefined) {
        this._emailserverprofileid = value;
    };
    /**
     * Gets the emailservertypename property value. 
     * @returns a string
     */
    public get emailservertypename() {
        return this._emailservertypename;
    };
    /**
     * Sets the emailservertypename property value. 
     * @param value Value to set for the emailservertypename property.
     */
    public set emailservertypename(value: string | undefined) {
        this._emailservertypename = value;
    };
    /**
     * Gets the encodingcodepage property value. 
     * @returns a string
     */
    public get encodingcodepage() {
        return this._encodingcodepage;
    };
    /**
     * Sets the encodingcodepage property value. 
     * @param value Value to set for the encodingcodepage property.
     */
    public set encodingcodepage(value: string | undefined) {
        this._encodingcodepage = value;
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
     * Gets the exchangeonlinetenantid property value. 
     * @returns a string
     */
    public get exchangeonlinetenantid() {
        return this._exchangeonlinetenantid;
    };
    /**
     * Sets the exchangeonlinetenantid property value. 
     * @param value Value to set for the exchangeonlinetenantid property.
     */
    public set exchangeonlinetenantid(value: string | undefined) {
        this._exchangeonlinetenantid = value;
    };
    /**
     * Gets the exchangeversion property value. 
     * @returns a integer
     */
    public get exchangeversion() {
        return this._exchangeversion;
    };
    /**
     * Sets the exchangeversion property value. 
     * @param value Value to set for the exchangeversion property.
     */
    public set exchangeversion(value: number | undefined) {
        this._exchangeversion = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Emailserverprofile)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Emailserverprofile)._createdonbehalfby_value = n.getStringValue(); },
            "_incomingpartnerapplication_value": (o, n) => { (o as unknown as Emailserverprofile)._incomingpartnerapplication_value = n.getStringValue(); },
            "_keyvaultreferenceid_value": (o, n) => { (o as unknown as Emailserverprofile)._keyvaultreferenceid_value = n.getStringValue(); },
            "_managedidentityid_value": (o, n) => { (o as unknown as Emailserverprofile)._managedidentityid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Emailserverprofile)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Emailserverprofile)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Emailserverprofile)._organizationid_value = n.getStringValue(); },
            "_outgoingpartnerapplication_value": (o, n) => { (o as unknown as Emailserverprofile)._outgoingpartnerapplication_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Emailserverprofile)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Emailserverprofile)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Emailserverprofile)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Emailserverprofile)._owninguser_value = n.getStringValue(); },
            "aadresourceid": (o, n) => { (o as unknown as Emailserverprofile).aadresourceid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Emailserverprofile).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Emailserverprofile).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Emailserverprofile).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "defaultserverlocation": (o, n) => { (o as unknown as Emailserverprofile).defaultserverlocation = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Emailserverprofile).description = n.getStringValue(); },
            "emailServerProfile_Annotation": (o, n) => { (o as unknown as Emailserverprofile).emailServerProfile_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "emailserverprofile_asyncoperations": (o, n) => { (o as unknown as Emailserverprofile).emailserverprofile_asyncoperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "emailserverprofile_bulkdeletefailures": (o, n) => { (o as unknown as Emailserverprofile).emailserverprofile_bulkdeletefailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "emailserverprofile_duplicatebaserecord": (o, n) => { (o as unknown as Emailserverprofile).emailserverprofile_duplicatebaserecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "emailserverprofile_duplicatematchingrecord": (o, n) => { (o as unknown as Emailserverprofile).emailserverprofile_duplicatematchingrecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "emailserverprofile_mailbox": (o, n) => { (o as unknown as Emailserverprofile).emailserverprofile_mailbox = n.getCollectionOfObjectValues<Mailbox>(createMailboxFromDiscriminatorValue); },
            "emailServerProfile_Organization": (o, n) => { (o as unknown as Emailserverprofile).emailServerProfile_Organization = n.getCollectionOfObjectValues<Organization>(createOrganizationFromDiscriminatorValue); },
            "emailServerProfile_SyncErrors": (o, n) => { (o as unknown as Emailserverprofile).emailServerProfile_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "emailserverprofileid": (o, n) => { (o as unknown as Emailserverprofile).emailserverprofileid = n.getStringValue(); },
            "emailservertypename": (o, n) => { (o as unknown as Emailserverprofile).emailservertypename = n.getStringValue(); },
            "encodingcodepage": (o, n) => { (o as unknown as Emailserverprofile).encodingcodepage = n.getStringValue(); },
            "entityimage": (o, n) => { (o as unknown as Emailserverprofile).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Emailserverprofile).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Emailserverprofile).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Emailserverprofile).entityimageid = n.getStringValue(); },
            "exchangeonlinetenantid": (o, n) => { (o as unknown as Emailserverprofile).exchangeonlinetenantid = n.getStringValue(); },
            "exchangeversion": (o, n) => { (o as unknown as Emailserverprofile).exchangeversion = n.getNumberValue(); },
            "incomingauthenticationprotocol": (o, n) => { (o as unknown as Emailserverprofile).incomingauthenticationprotocol = n.getNumberValue(); },
            "incomingcredentialretrieval": (o, n) => { (o as unknown as Emailserverprofile).incomingcredentialretrieval = n.getNumberValue(); },
            "incomingpassword": (o, n) => { (o as unknown as Emailserverprofile).incomingpassword = n.getStringValue(); },
            "incomingportnumber": (o, n) => { (o as unknown as Emailserverprofile).incomingportnumber = n.getNumberValue(); },
            "incomingserverlocation": (o, n) => { (o as unknown as Emailserverprofile).incomingserverlocation = n.getStringValue(); },
            "incominguseimpersonation": (o, n) => { (o as unknown as Emailserverprofile).incominguseimpersonation = n.getBooleanValue(); },
            "incomingusername": (o, n) => { (o as unknown as Emailserverprofile).incomingusername = n.getStringValue(); },
            "incomingusessl": (o, n) => { (o as unknown as Emailserverprofile).incomingusessl = n.getBooleanValue(); },
            "isincomingpasswordset": (o, n) => { (o as unknown as Emailserverprofile).isincomingpasswordset = n.getBooleanValue(); },
            "isoauthclientsecretset": (o, n) => { (o as unknown as Emailserverprofile).isoauthclientsecretset = n.getBooleanValue(); },
            "isoutgoingpasswordset": (o, n) => { (o as unknown as Emailserverprofile).isoutgoingpasswordset = n.getBooleanValue(); },
            "keyvaultreferenceid": (o, n) => { (o as unknown as Emailserverprofile).keyvaultreferenceid = n.getObjectValue<Keyvaultreference>(createKeyvaultreferenceFromDiscriminatorValue); },
            "lastauthorizationstatus": (o, n) => { (o as unknown as Emailserverprofile).lastauthorizationstatus = n.getNumberValue(); },
            "lastcrmmessage": (o, n) => { (o as unknown as Emailserverprofile).lastcrmmessage = n.getStringValue(); },
            "lasttestexecutionstatus": (o, n) => { (o as unknown as Emailserverprofile).lasttestexecutionstatus = n.getNumberValue(); },
            "lasttestrequest": (o, n) => { (o as unknown as Emailserverprofile).lasttestrequest = n.getStringValue(); },
            "lasttestresponse": (o, n) => { (o as unknown as Emailserverprofile).lasttestresponse = n.getStringValue(); },
            "lastteststarttime": (o, n) => { (o as unknown as Emailserverprofile).lastteststarttime = n.getDateValue(); },
            "lasttesttotalexecutiontime": (o, n) => { (o as unknown as Emailserverprofile).lasttesttotalexecutiontime = n.getNumberValue(); },
            "lasttestvalidationstatus": (o, n) => { (o as unknown as Emailserverprofile).lasttestvalidationstatus = n.getNumberValue(); },
            "managedidentityid": (o, n) => { (o as unknown as Emailserverprofile).managedidentityid = n.getObjectValue<Managedidentity>(createManagedidentityFromDiscriminatorValue); },
            "maxconcurrentconnections": (o, n) => { (o as unknown as Emailserverprofile).maxconcurrentconnections = n.getNumberValue(); },
            "minpollingintervalinminutes": (o, n) => { (o as unknown as Emailserverprofile).minpollingintervalinminutes = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Emailserverprofile).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Emailserverprofile).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Emailserverprofile).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "moveundeliveredemails": (o, n) => { (o as unknown as Emailserverprofile).moveundeliveredemails = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Emailserverprofile).name = n.getStringValue(); },
            "oauthclientid": (o, n) => { (o as unknown as Emailserverprofile).oauthclientid = n.getStringValue(); },
            "oauthclientsecret": (o, n) => { (o as unknown as Emailserverprofile).oauthclientsecret = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Emailserverprofile).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "outgoingauthenticationprotocol": (o, n) => { (o as unknown as Emailserverprofile).outgoingauthenticationprotocol = n.getNumberValue(); },
            "outgoingautograntdelegateaccess": (o, n) => { (o as unknown as Emailserverprofile).outgoingautograntdelegateaccess = n.getBooleanValue(); },
            "outgoingcredentialretrieval": (o, n) => { (o as unknown as Emailserverprofile).outgoingcredentialretrieval = n.getNumberValue(); },
            "outgoingpassword": (o, n) => { (o as unknown as Emailserverprofile).outgoingpassword = n.getStringValue(); },
            "outgoingportnumber": (o, n) => { (o as unknown as Emailserverprofile).outgoingportnumber = n.getNumberValue(); },
            "outgoingserverlocation": (o, n) => { (o as unknown as Emailserverprofile).outgoingserverlocation = n.getStringValue(); },
            "outgoinguseimpersonation": (o, n) => { (o as unknown as Emailserverprofile).outgoinguseimpersonation = n.getBooleanValue(); },
            "outgoingusername": (o, n) => { (o as unknown as Emailserverprofile).outgoingusername = n.getStringValue(); },
            "outgoingusessl": (o, n) => { (o as unknown as Emailserverprofile).outgoingusessl = n.getBooleanValue(); },
            "owneremailaddress": (o, n) => { (o as unknown as Emailserverprofile).owneremailaddress = n.getStringValue(); },
            "ownerid": (o, n) => { (o as unknown as Emailserverprofile).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Emailserverprofile).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Emailserverprofile).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "processemailsreceivedafter": (o, n) => { (o as unknown as Emailserverprofile).processemailsreceivedafter = n.getDateValue(); },
            "sendemailalert": (o, n) => { (o as unknown as Emailserverprofile).sendemailalert = n.getBooleanValue(); },
            "servertype": (o, n) => { (o as unknown as Emailserverprofile).servertype = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Emailserverprofile).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Emailserverprofile).statuscode = n.getNumberValue(); },
            "timeoutmailboxconnection": (o, n) => { (o as unknown as Emailserverprofile).timeoutmailboxconnection = n.getBooleanValue(); },
            "timeoutmailboxconnectionafteramount": (o, n) => { (o as unknown as Emailserverprofile).timeoutmailboxconnectionafteramount = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Emailserverprofile).timezoneruleversionnumber = n.getNumberValue(); },
            "tracelog_EmailServerProfile": (o, n) => { (o as unknown as Emailserverprofile).tracelog_EmailServerProfile = n.getCollectionOfObjectValues<Tracelog>(createTracelogFromDiscriminatorValue); },
            "useautodiscover": (o, n) => { (o as unknown as Emailserverprofile).useautodiscover = n.getBooleanValue(); },
            "usedefaulttenantid": (o, n) => { (o as unknown as Emailserverprofile).usedefaulttenantid = n.getBooleanValue(); },
            "usesamesettingsforoutgoingconnections": (o, n) => { (o as unknown as Emailserverprofile).usesamesettingsforoutgoingconnections = n.getBooleanValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Emailserverprofile).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Emailserverprofile).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the incomingauthenticationprotocol property value. 
     * @returns a integer
     */
    public get incomingauthenticationprotocol() {
        return this._incomingauthenticationprotocol;
    };
    /**
     * Sets the incomingauthenticationprotocol property value. 
     * @param value Value to set for the incomingauthenticationprotocol property.
     */
    public set incomingauthenticationprotocol(value: number | undefined) {
        this._incomingauthenticationprotocol = value;
    };
    /**
     * Gets the incomingcredentialretrieval property value. 
     * @returns a integer
     */
    public get incomingcredentialretrieval() {
        return this._incomingcredentialretrieval;
    };
    /**
     * Sets the incomingcredentialretrieval property value. 
     * @param value Value to set for the incomingcredentialretrieval property.
     */
    public set incomingcredentialretrieval(value: number | undefined) {
        this._incomingcredentialretrieval = value;
    };
    /**
     * Gets the incomingpassword property value. 
     * @returns a string
     */
    public get incomingpassword() {
        return this._incomingpassword;
    };
    /**
     * Sets the incomingpassword property value. 
     * @param value Value to set for the incomingpassword property.
     */
    public set incomingpassword(value: string | undefined) {
        this._incomingpassword = value;
    };
    /**
     * Gets the incomingportnumber property value. 
     * @returns a integer
     */
    public get incomingportnumber() {
        return this._incomingportnumber;
    };
    /**
     * Sets the incomingportnumber property value. 
     * @param value Value to set for the incomingportnumber property.
     */
    public set incomingportnumber(value: number | undefined) {
        this._incomingportnumber = value;
    };
    /**
     * Gets the incomingserverlocation property value. 
     * @returns a string
     */
    public get incomingserverlocation() {
        return this._incomingserverlocation;
    };
    /**
     * Sets the incomingserverlocation property value. 
     * @param value Value to set for the incomingserverlocation property.
     */
    public set incomingserverlocation(value: string | undefined) {
        this._incomingserverlocation = value;
    };
    /**
     * Gets the incominguseimpersonation property value. 
     * @returns a boolean
     */
    public get incominguseimpersonation() {
        return this._incominguseimpersonation;
    };
    /**
     * Sets the incominguseimpersonation property value. 
     * @param value Value to set for the incominguseimpersonation property.
     */
    public set incominguseimpersonation(value: boolean | undefined) {
        this._incominguseimpersonation = value;
    };
    /**
     * Gets the incomingusername property value. 
     * @returns a string
     */
    public get incomingusername() {
        return this._incomingusername;
    };
    /**
     * Sets the incomingusername property value. 
     * @param value Value to set for the incomingusername property.
     */
    public set incomingusername(value: string | undefined) {
        this._incomingusername = value;
    };
    /**
     * Gets the incomingusessl property value. 
     * @returns a boolean
     */
    public get incomingusessl() {
        return this._incomingusessl;
    };
    /**
     * Sets the incomingusessl property value. 
     * @param value Value to set for the incomingusessl property.
     */
    public set incomingusessl(value: boolean | undefined) {
        this._incomingusessl = value;
    };
    /**
     * Gets the isincomingpasswordset property value. 
     * @returns a boolean
     */
    public get isincomingpasswordset() {
        return this._isincomingpasswordset;
    };
    /**
     * Sets the isincomingpasswordset property value. 
     * @param value Value to set for the isincomingpasswordset property.
     */
    public set isincomingpasswordset(value: boolean | undefined) {
        this._isincomingpasswordset = value;
    };
    /**
     * Gets the isoauthclientsecretset property value. 
     * @returns a boolean
     */
    public get isoauthclientsecretset() {
        return this._isoauthclientsecretset;
    };
    /**
     * Sets the isoauthclientsecretset property value. 
     * @param value Value to set for the isoauthclientsecretset property.
     */
    public set isoauthclientsecretset(value: boolean | undefined) {
        this._isoauthclientsecretset = value;
    };
    /**
     * Gets the isoutgoingpasswordset property value. 
     * @returns a boolean
     */
    public get isoutgoingpasswordset() {
        return this._isoutgoingpasswordset;
    };
    /**
     * Sets the isoutgoingpasswordset property value. 
     * @param value Value to set for the isoutgoingpasswordset property.
     */
    public set isoutgoingpasswordset(value: boolean | undefined) {
        this._isoutgoingpasswordset = value;
    };
    /**
     * Gets the keyvaultreferenceid property value. 
     * @returns a keyvaultreference
     */
    public get keyvaultreferenceid() {
        return this._keyvaultreferenceid;
    };
    /**
     * Sets the keyvaultreferenceid property value. 
     * @param value Value to set for the keyvaultreferenceid property.
     */
    public set keyvaultreferenceid(value: Keyvaultreference | undefined) {
        this._keyvaultreferenceid = value;
    };
    /**
     * Gets the lastauthorizationstatus property value. 
     * @returns a integer
     */
    public get lastauthorizationstatus() {
        return this._lastauthorizationstatus;
    };
    /**
     * Sets the lastauthorizationstatus property value. 
     * @param value Value to set for the lastauthorizationstatus property.
     */
    public set lastauthorizationstatus(value: number | undefined) {
        this._lastauthorizationstatus = value;
    };
    /**
     * Gets the lastcrmmessage property value. 
     * @returns a string
     */
    public get lastcrmmessage() {
        return this._lastcrmmessage;
    };
    /**
     * Sets the lastcrmmessage property value. 
     * @param value Value to set for the lastcrmmessage property.
     */
    public set lastcrmmessage(value: string | undefined) {
        this._lastcrmmessage = value;
    };
    /**
     * Gets the lasttestexecutionstatus property value. 
     * @returns a integer
     */
    public get lasttestexecutionstatus() {
        return this._lasttestexecutionstatus;
    };
    /**
     * Sets the lasttestexecutionstatus property value. 
     * @param value Value to set for the lasttestexecutionstatus property.
     */
    public set lasttestexecutionstatus(value: number | undefined) {
        this._lasttestexecutionstatus = value;
    };
    /**
     * Gets the lasttestrequest property value. 
     * @returns a string
     */
    public get lasttestrequest() {
        return this._lasttestrequest;
    };
    /**
     * Sets the lasttestrequest property value. 
     * @param value Value to set for the lasttestrequest property.
     */
    public set lasttestrequest(value: string | undefined) {
        this._lasttestrequest = value;
    };
    /**
     * Gets the lasttestresponse property value. 
     * @returns a string
     */
    public get lasttestresponse() {
        return this._lasttestresponse;
    };
    /**
     * Sets the lasttestresponse property value. 
     * @param value Value to set for the lasttestresponse property.
     */
    public set lasttestresponse(value: string | undefined) {
        this._lasttestresponse = value;
    };
    /**
     * Gets the lastteststarttime property value. 
     * @returns a Date
     */
    public get lastteststarttime() {
        return this._lastteststarttime;
    };
    /**
     * Sets the lastteststarttime property value. 
     * @param value Value to set for the lastteststarttime property.
     */
    public set lastteststarttime(value: Date | undefined) {
        this._lastteststarttime = value;
    };
    /**
     * Gets the lasttesttotalexecutiontime property value. 
     * @returns a int64
     */
    public get lasttesttotalexecutiontime() {
        return this._lasttesttotalexecutiontime;
    };
    /**
     * Sets the lasttesttotalexecutiontime property value. 
     * @param value Value to set for the lasttesttotalexecutiontime property.
     */
    public set lasttesttotalexecutiontime(value: number | undefined) {
        this._lasttesttotalexecutiontime = value;
    };
    /**
     * Gets the lasttestvalidationstatus property value. 
     * @returns a integer
     */
    public get lasttestvalidationstatus() {
        return this._lasttestvalidationstatus;
    };
    /**
     * Sets the lasttestvalidationstatus property value. 
     * @param value Value to set for the lasttestvalidationstatus property.
     */
    public set lasttestvalidationstatus(value: number | undefined) {
        this._lasttestvalidationstatus = value;
    };
    /**
     * Gets the managedidentityid property value. 
     * @returns a managedidentity
     */
    public get managedidentityid() {
        return this._managedidentityid;
    };
    /**
     * Sets the managedidentityid property value. 
     * @param value Value to set for the managedidentityid property.
     */
    public set managedidentityid(value: Managedidentity | undefined) {
        this._managedidentityid = value;
    };
    /**
     * Gets the maxconcurrentconnections property value. 
     * @returns a integer
     */
    public get maxconcurrentconnections() {
        return this._maxconcurrentconnections;
    };
    /**
     * Sets the maxconcurrentconnections property value. 
     * @param value Value to set for the maxconcurrentconnections property.
     */
    public set maxconcurrentconnections(value: number | undefined) {
        this._maxconcurrentconnections = value;
    };
    /**
     * Gets the minpollingintervalinminutes property value. 
     * @returns a integer
     */
    public get minpollingintervalinminutes() {
        return this._minpollingintervalinminutes;
    };
    /**
     * Sets the minpollingintervalinminutes property value. 
     * @param value Value to set for the minpollingintervalinminutes property.
     */
    public set minpollingintervalinminutes(value: number | undefined) {
        this._minpollingintervalinminutes = value;
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
     * Gets the moveundeliveredemails property value. 
     * @returns a boolean
     */
    public get moveundeliveredemails() {
        return this._moveundeliveredemails;
    };
    /**
     * Sets the moveundeliveredemails property value. 
     * @param value Value to set for the moveundeliveredemails property.
     */
    public set moveundeliveredemails(value: boolean | undefined) {
        this._moveundeliveredemails = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the oauthclientid property value. 
     * @returns a string
     */
    public get oauthclientid() {
        return this._oauthclientid;
    };
    /**
     * Sets the oauthclientid property value. 
     * @param value Value to set for the oauthclientid property.
     */
    public set oauthclientid(value: string | undefined) {
        this._oauthclientid = value;
    };
    /**
     * Gets the oauthclientsecret property value. 
     * @returns a string
     */
    public get oauthclientsecret() {
        return this._oauthclientsecret;
    };
    /**
     * Sets the oauthclientsecret property value. 
     * @param value Value to set for the oauthclientsecret property.
     */
    public set oauthclientsecret(value: string | undefined) {
        this._oauthclientsecret = value;
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
     * Gets the outgoingauthenticationprotocol property value. 
     * @returns a integer
     */
    public get outgoingauthenticationprotocol() {
        return this._outgoingauthenticationprotocol;
    };
    /**
     * Sets the outgoingauthenticationprotocol property value. 
     * @param value Value to set for the outgoingauthenticationprotocol property.
     */
    public set outgoingauthenticationprotocol(value: number | undefined) {
        this._outgoingauthenticationprotocol = value;
    };
    /**
     * Gets the outgoingautograntdelegateaccess property value. 
     * @returns a boolean
     */
    public get outgoingautograntdelegateaccess() {
        return this._outgoingautograntdelegateaccess;
    };
    /**
     * Sets the outgoingautograntdelegateaccess property value. 
     * @param value Value to set for the outgoingautograntdelegateaccess property.
     */
    public set outgoingautograntdelegateaccess(value: boolean | undefined) {
        this._outgoingautograntdelegateaccess = value;
    };
    /**
     * Gets the outgoingcredentialretrieval property value. 
     * @returns a integer
     */
    public get outgoingcredentialretrieval() {
        return this._outgoingcredentialretrieval;
    };
    /**
     * Sets the outgoingcredentialretrieval property value. 
     * @param value Value to set for the outgoingcredentialretrieval property.
     */
    public set outgoingcredentialretrieval(value: number | undefined) {
        this._outgoingcredentialretrieval = value;
    };
    /**
     * Gets the outgoingpassword property value. 
     * @returns a string
     */
    public get outgoingpassword() {
        return this._outgoingpassword;
    };
    /**
     * Sets the outgoingpassword property value. 
     * @param value Value to set for the outgoingpassword property.
     */
    public set outgoingpassword(value: string | undefined) {
        this._outgoingpassword = value;
    };
    /**
     * Gets the outgoingportnumber property value. 
     * @returns a integer
     */
    public get outgoingportnumber() {
        return this._outgoingportnumber;
    };
    /**
     * Sets the outgoingportnumber property value. 
     * @param value Value to set for the outgoingportnumber property.
     */
    public set outgoingportnumber(value: number | undefined) {
        this._outgoingportnumber = value;
    };
    /**
     * Gets the outgoingserverlocation property value. 
     * @returns a string
     */
    public get outgoingserverlocation() {
        return this._outgoingserverlocation;
    };
    /**
     * Sets the outgoingserverlocation property value. 
     * @param value Value to set for the outgoingserverlocation property.
     */
    public set outgoingserverlocation(value: string | undefined) {
        this._outgoingserverlocation = value;
    };
    /**
     * Gets the outgoinguseimpersonation property value. 
     * @returns a boolean
     */
    public get outgoinguseimpersonation() {
        return this._outgoinguseimpersonation;
    };
    /**
     * Sets the outgoinguseimpersonation property value. 
     * @param value Value to set for the outgoinguseimpersonation property.
     */
    public set outgoinguseimpersonation(value: boolean | undefined) {
        this._outgoinguseimpersonation = value;
    };
    /**
     * Gets the outgoingusername property value. 
     * @returns a string
     */
    public get outgoingusername() {
        return this._outgoingusername;
    };
    /**
     * Sets the outgoingusername property value. 
     * @param value Value to set for the outgoingusername property.
     */
    public set outgoingusername(value: string | undefined) {
        this._outgoingusername = value;
    };
    /**
     * Gets the outgoingusessl property value. 
     * @returns a boolean
     */
    public get outgoingusessl() {
        return this._outgoingusessl;
    };
    /**
     * Sets the outgoingusessl property value. 
     * @param value Value to set for the outgoingusessl property.
     */
    public set outgoingusessl(value: boolean | undefined) {
        this._outgoingusessl = value;
    };
    /**
     * Gets the owneremailaddress property value. 
     * @returns a string
     */
    public get owneremailaddress() {
        return this._owneremailaddress;
    };
    /**
     * Sets the owneremailaddress property value. 
     * @param value Value to set for the owneremailaddress property.
     */
    public set owneremailaddress(value: string | undefined) {
        this._owneremailaddress = value;
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
     * Gets the processemailsreceivedafter property value. 
     * @returns a Date
     */
    public get processemailsreceivedafter() {
        return this._processemailsreceivedafter;
    };
    /**
     * Sets the processemailsreceivedafter property value. 
     * @param value Value to set for the processemailsreceivedafter property.
     */
    public set processemailsreceivedafter(value: Date | undefined) {
        this._processemailsreceivedafter = value;
    };
    /**
     * Gets the sendemailalert property value. 
     * @returns a boolean
     */
    public get sendemailalert() {
        return this._sendemailalert;
    };
    /**
     * Sets the sendemailalert property value. 
     * @param value Value to set for the sendemailalert property.
     */
    public set sendemailalert(value: boolean | undefined) {
        this._sendemailalert = value;
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
        writer.writeStringValue("_incomingpartnerapplication_value", this._incomingpartnerapplication_value);
        writer.writeStringValue("_keyvaultreferenceid_value", this._keyvaultreferenceid_value);
        writer.writeStringValue("_managedidentityid_value", this._managedidentityid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_outgoingpartnerapplication_value", this._outgoingpartnerapplication_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("aadresourceid", this.aadresourceid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("defaultserverlocation", this.defaultserverlocation);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<Annotation>("emailServerProfile_Annotation", this.emailServerProfile_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("emailserverprofile_asyncoperations", this.emailserverprofile_asyncoperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("emailserverprofile_bulkdeletefailures", this.emailserverprofile_bulkdeletefailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("emailserverprofile_duplicatebaserecord", this.emailserverprofile_duplicatebaserecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("emailserverprofile_duplicatematchingrecord", this.emailserverprofile_duplicatematchingrecord);
        writer.writeCollectionOfObjectValues<Mailbox>("emailserverprofile_mailbox", this.emailserverprofile_mailbox);
        writer.writeCollectionOfObjectValues<Organization>("emailServerProfile_Organization", this.emailServerProfile_Organization);
        writer.writeCollectionOfObjectValues<Syncerror>("emailServerProfile_SyncErrors", this.emailServerProfile_SyncErrors);
        writer.writeStringValue("emailserverprofileid", this.emailserverprofileid);
        writer.writeStringValue("emailservertypename", this.emailservertypename);
        writer.writeStringValue("encodingcodepage", this.encodingcodepage);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeStringValue("exchangeonlinetenantid", this.exchangeonlinetenantid);
        writer.writeNumberValue("exchangeversion", this.exchangeversion);
        writer.writeNumberValue("incomingauthenticationprotocol", this.incomingauthenticationprotocol);
        writer.writeNumberValue("incomingcredentialretrieval", this.incomingcredentialretrieval);
        writer.writeStringValue("incomingpassword", this.incomingpassword);
        writer.writeNumberValue("incomingportnumber", this.incomingportnumber);
        writer.writeStringValue("incomingserverlocation", this.incomingserverlocation);
        writer.writeBooleanValue("incominguseimpersonation", this.incominguseimpersonation);
        writer.writeStringValue("incomingusername", this.incomingusername);
        writer.writeBooleanValue("incomingusessl", this.incomingusessl);
        writer.writeBooleanValue("isincomingpasswordset", this.isincomingpasswordset);
        writer.writeBooleanValue("isoauthclientsecretset", this.isoauthclientsecretset);
        writer.writeBooleanValue("isoutgoingpasswordset", this.isoutgoingpasswordset);
        writer.writeObjectValue<Keyvaultreference>("keyvaultreferenceid", this.keyvaultreferenceid);
        writer.writeNumberValue("lastauthorizationstatus", this.lastauthorizationstatus);
        writer.writeStringValue("lastcrmmessage", this.lastcrmmessage);
        writer.writeNumberValue("lasttestexecutionstatus", this.lasttestexecutionstatus);
        writer.writeStringValue("lasttestrequest", this.lasttestrequest);
        writer.writeStringValue("lasttestresponse", this.lasttestresponse);
        writer.writeDateValue("lastteststarttime", this.lastteststarttime);
        writer.writeNumberValue("lasttesttotalexecutiontime", this.lasttesttotalexecutiontime);
        writer.writeNumberValue("lasttestvalidationstatus", this.lasttestvalidationstatus);
        writer.writeObjectValue<Managedidentity>("managedidentityid", this.managedidentityid);
        writer.writeNumberValue("maxconcurrentconnections", this.maxconcurrentconnections);
        writer.writeNumberValue("minpollingintervalinminutes", this.minpollingintervalinminutes);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("moveundeliveredemails", this.moveundeliveredemails);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("oauthclientid", this.oauthclientid);
        writer.writeStringValue("oauthclientsecret", this.oauthclientsecret);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeNumberValue("outgoingauthenticationprotocol", this.outgoingauthenticationprotocol);
        writer.writeBooleanValue("outgoingautograntdelegateaccess", this.outgoingautograntdelegateaccess);
        writer.writeNumberValue("outgoingcredentialretrieval", this.outgoingcredentialretrieval);
        writer.writeStringValue("outgoingpassword", this.outgoingpassword);
        writer.writeNumberValue("outgoingportnumber", this.outgoingportnumber);
        writer.writeStringValue("outgoingserverlocation", this.outgoingserverlocation);
        writer.writeBooleanValue("outgoinguseimpersonation", this.outgoinguseimpersonation);
        writer.writeStringValue("outgoingusername", this.outgoingusername);
        writer.writeBooleanValue("outgoingusessl", this.outgoingusessl);
        writer.writeStringValue("owneremailaddress", this.owneremailaddress);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeDateValue("processemailsreceivedafter", this.processemailsreceivedafter);
        writer.writeBooleanValue("sendemailalert", this.sendemailalert);
        writer.writeNumberValue("servertype", this.servertype);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeBooleanValue("timeoutmailboxconnection", this.timeoutmailboxconnection);
        writer.writeNumberValue("timeoutmailboxconnectionafteramount", this.timeoutmailboxconnectionafteramount);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeCollectionOfObjectValues<Tracelog>("tracelog_EmailServerProfile", this.tracelog_EmailServerProfile);
        writer.writeBooleanValue("useautodiscover", this.useautodiscover);
        writer.writeBooleanValue("usedefaulttenantid", this.usedefaulttenantid);
        writer.writeBooleanValue("usesamesettingsforoutgoingconnections", this.usesamesettingsforoutgoingconnections);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the servertype property value. 
     * @returns a integer
     */
    public get servertype() {
        return this._servertype;
    };
    /**
     * Sets the servertype property value. 
     * @param value Value to set for the servertype property.
     */
    public set servertype(value: number | undefined) {
        this._servertype = value;
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timeoutmailboxconnection property value. 
     * @returns a boolean
     */
    public get timeoutmailboxconnection() {
        return this._timeoutmailboxconnection;
    };
    /**
     * Sets the timeoutmailboxconnection property value. 
     * @param value Value to set for the timeoutmailboxconnection property.
     */
    public set timeoutmailboxconnection(value: boolean | undefined) {
        this._timeoutmailboxconnection = value;
    };
    /**
     * Gets the timeoutmailboxconnectionafteramount property value. 
     * @returns a integer
     */
    public get timeoutmailboxconnectionafteramount() {
        return this._timeoutmailboxconnectionafteramount;
    };
    /**
     * Sets the timeoutmailboxconnectionafteramount property value. 
     * @param value Value to set for the timeoutmailboxconnectionafteramount property.
     */
    public set timeoutmailboxconnectionafteramount(value: number | undefined) {
        this._timeoutmailboxconnectionafteramount = value;
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
     * Gets the tracelog_EmailServerProfile property value. 
     * @returns a tracelog
     */
    public get tracelog_EmailServerProfile() {
        return this._tracelog_EmailServerProfile;
    };
    /**
     * Sets the tracelog_EmailServerProfile property value. 
     * @param value Value to set for the tracelog_EmailServerProfile property.
     */
    public set tracelog_EmailServerProfile(value: Tracelog[] | undefined) {
        this._tracelog_EmailServerProfile = value;
    };
    /**
     * Gets the useautodiscover property value. 
     * @returns a boolean
     */
    public get useautodiscover() {
        return this._useautodiscover;
    };
    /**
     * Sets the useautodiscover property value. 
     * @param value Value to set for the useautodiscover property.
     */
    public set useautodiscover(value: boolean | undefined) {
        this._useautodiscover = value;
    };
    /**
     * Gets the usedefaulttenantid property value. 
     * @returns a boolean
     */
    public get usedefaulttenantid() {
        return this._usedefaulttenantid;
    };
    /**
     * Sets the usedefaulttenantid property value. 
     * @param value Value to set for the usedefaulttenantid property.
     */
    public set usedefaulttenantid(value: boolean | undefined) {
        this._usedefaulttenantid = value;
    };
    /**
     * Gets the usesamesettingsforoutgoingconnections property value. 
     * @returns a boolean
     */
    public get usesamesettingsforoutgoingconnections() {
        return this._usesamesettingsforoutgoingconnections;
    };
    /**
     * Sets the usesamesettingsforoutgoingconnections property value. 
     * @param value Value to set for the usesamesettingsforoutgoingconnections property.
     */
    public set usesamesettingsforoutgoingconnections(value: boolean | undefined) {
        this._usesamesettingsforoutgoingconnections = value;
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
