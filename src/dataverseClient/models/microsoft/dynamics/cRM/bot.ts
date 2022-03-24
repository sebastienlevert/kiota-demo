import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBotcomponentFromDiscriminatorValue} from './createBotcomponentFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createConversationtranscriptFromDiscriminatorValue} from './createConversationtranscriptFromDiscriminatorValue';
import {createEnvironmentvariabledefinitionFromDiscriminatorValue} from './createEnvironmentvariabledefinitionFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Botcomponent, Bulkdeletefailure, Businessunit, Conversationtranscript, Crmbaseentity, Environmentvariabledefinition, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bot extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __publishedby_value?: string | undefined;
    private _accesscontrolpolicy?: number | undefined;
    private _applicationmanifestinformation?: string | undefined;
    private _authenticationmode?: number | undefined;
    private _authenticationtrigger?: number | undefined;
    private _authorizedsecuritygroupids?: string | undefined;
    private _bot_AsyncOperations?: Asyncoperation[] | undefined;
    private _bot_botcomponent?: Botcomponent[] | undefined;
    private _bot_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _bot_conversationtranscript?: Conversationtranscript[] | undefined;
    private _bot_environmentvariabledefinition?: Environmentvariabledefinition[] | undefined;
    private _bot_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _bot_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _bot_ProcessSession?: Processsession[] | undefined;
    private _bot_SyncErrors?: Syncerror[] | undefined;
    private _botid?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _configuration?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _iconbase64?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _language?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _publishedby?: Systemuser | undefined;
    private _publishedon?: Date | undefined;
    private _schemaname?: string | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _publishedby_value property value. 
     * @returns a string
     */
    public get _publishedby_value() {
        return this.__publishedby_value;
    };
    /**
     * Sets the _publishedby_value property value. 
     * @param value Value to set for the _publishedby_value property.
     */
    public set _publishedby_value(value: string | undefined) {
        this.__publishedby_value = value;
    };
    /**
     * Gets the accesscontrolpolicy property value. 
     * @returns a integer
     */
    public get accesscontrolpolicy() {
        return this._accesscontrolpolicy;
    };
    /**
     * Sets the accesscontrolpolicy property value. 
     * @param value Value to set for the accesscontrolpolicy property.
     */
    public set accesscontrolpolicy(value: number | undefined) {
        this._accesscontrolpolicy = value;
    };
    /**
     * Gets the applicationmanifestinformation property value. 
     * @returns a string
     */
    public get applicationmanifestinformation() {
        return this._applicationmanifestinformation;
    };
    /**
     * Sets the applicationmanifestinformation property value. 
     * @param value Value to set for the applicationmanifestinformation property.
     */
    public set applicationmanifestinformation(value: string | undefined) {
        this._applicationmanifestinformation = value;
    };
    /**
     * Gets the authenticationmode property value. 
     * @returns a integer
     */
    public get authenticationmode() {
        return this._authenticationmode;
    };
    /**
     * Sets the authenticationmode property value. 
     * @param value Value to set for the authenticationmode property.
     */
    public set authenticationmode(value: number | undefined) {
        this._authenticationmode = value;
    };
    /**
     * Gets the authenticationtrigger property value. 
     * @returns a integer
     */
    public get authenticationtrigger() {
        return this._authenticationtrigger;
    };
    /**
     * Sets the authenticationtrigger property value. 
     * @param value Value to set for the authenticationtrigger property.
     */
    public set authenticationtrigger(value: number | undefined) {
        this._authenticationtrigger = value;
    };
    /**
     * Gets the authorizedsecuritygroupids property value. 
     * @returns a string
     */
    public get authorizedsecuritygroupids() {
        return this._authorizedsecuritygroupids;
    };
    /**
     * Sets the authorizedsecuritygroupids property value. 
     * @param value Value to set for the authorizedsecuritygroupids property.
     */
    public set authorizedsecuritygroupids(value: string | undefined) {
        this._authorizedsecuritygroupids = value;
    };
    /**
     * Gets the bot_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get bot_AsyncOperations() {
        return this._bot_AsyncOperations;
    };
    /**
     * Sets the bot_AsyncOperations property value. 
     * @param value Value to set for the bot_AsyncOperations property.
     */
    public set bot_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._bot_AsyncOperations = value;
    };
    /**
     * Gets the bot_botcomponent property value. 
     * @returns a botcomponent
     */
    public get bot_botcomponent() {
        return this._bot_botcomponent;
    };
    /**
     * Sets the bot_botcomponent property value. 
     * @param value Value to set for the bot_botcomponent property.
     */
    public set bot_botcomponent(value: Botcomponent[] | undefined) {
        this._bot_botcomponent = value;
    };
    /**
     * Gets the bot_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get bot_BulkDeleteFailures() {
        return this._bot_BulkDeleteFailures;
    };
    /**
     * Sets the bot_BulkDeleteFailures property value. 
     * @param value Value to set for the bot_BulkDeleteFailures property.
     */
    public set bot_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._bot_BulkDeleteFailures = value;
    };
    /**
     * Gets the bot_conversationtranscript property value. 
     * @returns a conversationtranscript
     */
    public get bot_conversationtranscript() {
        return this._bot_conversationtranscript;
    };
    /**
     * Sets the bot_conversationtranscript property value. 
     * @param value Value to set for the bot_conversationtranscript property.
     */
    public set bot_conversationtranscript(value: Conversationtranscript[] | undefined) {
        this._bot_conversationtranscript = value;
    };
    /**
     * Gets the bot_environmentvariabledefinition property value. 
     * @returns a environmentvariabledefinition
     */
    public get bot_environmentvariabledefinition() {
        return this._bot_environmentvariabledefinition;
    };
    /**
     * Sets the bot_environmentvariabledefinition property value. 
     * @param value Value to set for the bot_environmentvariabledefinition property.
     */
    public set bot_environmentvariabledefinition(value: Environmentvariabledefinition[] | undefined) {
        this._bot_environmentvariabledefinition = value;
    };
    /**
     * Gets the bot_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get bot_MailboxTrackingFolders() {
        return this._bot_MailboxTrackingFolders;
    };
    /**
     * Sets the bot_MailboxTrackingFolders property value. 
     * @param value Value to set for the bot_MailboxTrackingFolders property.
     */
    public set bot_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._bot_MailboxTrackingFolders = value;
    };
    /**
     * Gets the bot_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get bot_PrincipalObjectAttributeAccesses() {
        return this._bot_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the bot_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the bot_PrincipalObjectAttributeAccesses property.
     */
    public set bot_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._bot_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the bot_ProcessSession property value. 
     * @returns a processsession
     */
    public get bot_ProcessSession() {
        return this._bot_ProcessSession;
    };
    /**
     * Sets the bot_ProcessSession property value. 
     * @param value Value to set for the bot_ProcessSession property.
     */
    public set bot_ProcessSession(value: Processsession[] | undefined) {
        this._bot_ProcessSession = value;
    };
    /**
     * Gets the bot_SyncErrors property value. 
     * @returns a syncerror
     */
    public get bot_SyncErrors() {
        return this._bot_SyncErrors;
    };
    /**
     * Sets the bot_SyncErrors property value. 
     * @param value Value to set for the bot_SyncErrors property.
     */
    public set bot_SyncErrors(value: Syncerror[] | undefined) {
        this._bot_SyncErrors = value;
    };
    /**
     * Gets the botid property value. 
     * @returns a string
     */
    public get botid() {
        return this._botid;
    };
    /**
     * Sets the botid property value. 
     * @param value Value to set for the botid property.
     */
    public set botid(value: string | undefined) {
        this._botid = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
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
     * Gets the configuration property value. 
     * @returns a string
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. 
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: string | undefined) {
        this._configuration = value;
    };
    /**
     * Instantiates a new bot and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Bot)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Bot)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Bot)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Bot)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Bot)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Bot)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Bot)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Bot)._owninguser_value = n.getStringValue(); },
            "_publishedby_value": (o, n) => { (o as unknown as Bot)._publishedby_value = n.getStringValue(); },
            "accesscontrolpolicy": (o, n) => { (o as unknown as Bot).accesscontrolpolicy = n.getNumberValue(); },
            "applicationmanifestinformation": (o, n) => { (o as unknown as Bot).applicationmanifestinformation = n.getStringValue(); },
            "authenticationmode": (o, n) => { (o as unknown as Bot).authenticationmode = n.getNumberValue(); },
            "authenticationtrigger": (o, n) => { (o as unknown as Bot).authenticationtrigger = n.getNumberValue(); },
            "authorizedsecuritygroupids": (o, n) => { (o as unknown as Bot).authorizedsecuritygroupids = n.getStringValue(); },
            "bot_AsyncOperations": (o, n) => { (o as unknown as Bot).bot_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bot_botcomponent": (o, n) => { (o as unknown as Bot).bot_botcomponent = n.getCollectionOfObjectValues<Botcomponent>(createBotcomponentFromDiscriminatorValue); },
            "bot_BulkDeleteFailures": (o, n) => { (o as unknown as Bot).bot_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bot_conversationtranscript": (o, n) => { (o as unknown as Bot).bot_conversationtranscript = n.getCollectionOfObjectValues<Conversationtranscript>(createConversationtranscriptFromDiscriminatorValue); },
            "bot_environmentvariabledefinition": (o, n) => { (o as unknown as Bot).bot_environmentvariabledefinition = n.getCollectionOfObjectValues<Environmentvariabledefinition>(createEnvironmentvariabledefinitionFromDiscriminatorValue); },
            "bot_MailboxTrackingFolders": (o, n) => { (o as unknown as Bot).bot_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "bot_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Bot).bot_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "bot_ProcessSession": (o, n) => { (o as unknown as Bot).bot_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "bot_SyncErrors": (o, n) => { (o as unknown as Bot).bot_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "botid": (o, n) => { (o as unknown as Bot).botid = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Bot).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Bot).componentstate = n.getNumberValue(); },
            "configuration": (o, n) => { (o as unknown as Bot).configuration = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Bot).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Bot).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Bot).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "iconbase64": (o, n) => { (o as unknown as Bot).iconbase64 = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Bot).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Bot).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Bot).ismanaged = n.getBooleanValue(); },
            "language": (o, n) => { (o as unknown as Bot).language = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Bot).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Bot).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Bot).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Bot).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Bot).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Bot).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Bot).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Bot).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Bot).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Bot).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "publishedby": (o, n) => { (o as unknown as Bot).publishedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "publishedon": (o, n) => { (o as unknown as Bot).publishedon = n.getDateValue(); },
            "schemaname": (o, n) => { (o as unknown as Bot).schemaname = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Bot).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Bot).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Bot).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Bot).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Bot).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Bot).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the iconbase64 property value. 
     * @returns a string
     */
    public get iconbase64() {
        return this._iconbase64;
    };
    /**
     * Sets the iconbase64 property value. 
     * @param value Value to set for the iconbase64 property.
     */
    public set iconbase64(value: string | undefined) {
        this._iconbase64 = value;
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
     * Gets the language property value. 
     * @returns a integer
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. 
     * @param value Value to set for the language property.
     */
    public set language(value: number | undefined) {
        this._language = value;
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
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
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
     * Gets the publishedby property value. 
     * @returns a systemuser
     */
    public get publishedby() {
        return this._publishedby;
    };
    /**
     * Sets the publishedby property value. 
     * @param value Value to set for the publishedby property.
     */
    public set publishedby(value: Systemuser | undefined) {
        this._publishedby = value;
    };
    /**
     * Gets the publishedon property value. 
     * @returns a Date
     */
    public get publishedon() {
        return this._publishedon;
    };
    /**
     * Sets the publishedon property value. 
     * @param value Value to set for the publishedon property.
     */
    public set publishedon(value: Date | undefined) {
        this._publishedon = value;
    };
    /**
     * Gets the schemaname property value. 
     * @returns a string
     */
    public get schemaname() {
        return this._schemaname;
    };
    /**
     * Sets the schemaname property value. 
     * @param value Value to set for the schemaname property.
     */
    public set schemaname(value: string | undefined) {
        this._schemaname = value;
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
        writer.writeStringValue("_publishedby_value", this._publishedby_value);
        writer.writeNumberValue("accesscontrolpolicy", this.accesscontrolpolicy);
        writer.writeStringValue("applicationmanifestinformation", this.applicationmanifestinformation);
        writer.writeNumberValue("authenticationmode", this.authenticationmode);
        writer.writeNumberValue("authenticationtrigger", this.authenticationtrigger);
        writer.writeStringValue("authorizedsecuritygroupids", this.authorizedsecuritygroupids);
        writer.writeCollectionOfObjectValues<Asyncoperation>("bot_AsyncOperations", this.bot_AsyncOperations);
        writer.writeCollectionOfObjectValues<Botcomponent>("bot_botcomponent", this.bot_botcomponent);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bot_BulkDeleteFailures", this.bot_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Conversationtranscript>("bot_conversationtranscript", this.bot_conversationtranscript);
        writer.writeCollectionOfObjectValues<Environmentvariabledefinition>("bot_environmentvariabledefinition", this.bot_environmentvariabledefinition);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("bot_MailboxTrackingFolders", this.bot_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("bot_PrincipalObjectAttributeAccesses", this.bot_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("bot_ProcessSession", this.bot_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("bot_SyncErrors", this.bot_SyncErrors);
        writer.writeStringValue("botid", this.botid);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("configuration", this.configuration);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("iconbase64", this.iconbase64);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeNumberValue("language", this.language);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Systemuser>("publishedby", this.publishedby);
        writer.writeDateValue("publishedon", this.publishedon);
        writer.writeStringValue("schemaname", this.schemaname);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
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
