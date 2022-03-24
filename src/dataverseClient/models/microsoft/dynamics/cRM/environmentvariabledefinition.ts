import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBotcomponentFromDiscriminatorValue} from './createBotcomponentFromDiscriminatorValue';
import {createBotFromDiscriminatorValue} from './createBotFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEnvironmentvariabledefinitionFromDiscriminatorValue} from './createEnvironmentvariabledefinitionFromDiscriminatorValue';
import {createEnvironmentvariablevalueFromDiscriminatorValue} from './createEnvironmentvariablevalueFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bot, Botcomponent, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Environmentvariablevalue, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Environmentvariabledefinition extends Crmbaseentity implements Parsable {
    private __connectionreferenceid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentdefinitionid_value?: string | undefined;
    private _apiid?: string | undefined;
    private _bot_environmentvariabledefinition?: Bot[] | undefined;
    private _botcomponent_environmentvariabledefinition?: Botcomponent[] | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _defaultvalue?: string | undefined;
    private _description?: string | undefined;
    private _displayname?: string | undefined;
    private _envdefinition_envdefinition?: Environmentvariabledefinition[] | undefined;
    private _environmentvariabledefinition_AsyncOperations?: Asyncoperation[] | undefined;
    private _environmentvariabledefinition_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _environmentvariabledefinition_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _environmentvariabledefinition_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _environmentvariabledefinition_environmentvariablevalue?: Environmentvariablevalue[] | undefined;
    private _environmentvariabledefinition_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _environmentvariabledefinition_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _environmentvariabledefinition_ProcessSession?: Processsession[] | undefined;
    private _environmentvariabledefinition_SyncErrors?: Syncerror[] | undefined;
    private _environmentvariabledefinitionid?: string | undefined;
    private _environmentvariabledefinitionidunique?: string | undefined;
    private _hint?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _isrequired?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parameterkey?: string | undefined;
    private _parentDefinitionId?: Environmentvariabledefinition | undefined;
    private _schemaname?: string | undefined;
    private _secretstore?: number | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _type?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _valueschema?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _connectionreferenceid_value property value. 
     * @returns a string
     */
    public get _connectionreferenceid_value() {
        return this.__connectionreferenceid_value;
    };
    /**
     * Sets the _connectionreferenceid_value property value. 
     * @param value Value to set for the _connectionreferenceid_value property.
     */
    public set _connectionreferenceid_value(value: string | undefined) {
        this.__connectionreferenceid_value = value;
    };
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
     * Gets the _parentdefinitionid_value property value. 
     * @returns a string
     */
    public get _parentdefinitionid_value() {
        return this.__parentdefinitionid_value;
    };
    /**
     * Sets the _parentdefinitionid_value property value. 
     * @param value Value to set for the _parentdefinitionid_value property.
     */
    public set _parentdefinitionid_value(value: string | undefined) {
        this.__parentdefinitionid_value = value;
    };
    /**
     * Gets the apiid property value. 
     * @returns a string
     */
    public get apiid() {
        return this._apiid;
    };
    /**
     * Sets the apiid property value. 
     * @param value Value to set for the apiid property.
     */
    public set apiid(value: string | undefined) {
        this._apiid = value;
    };
    /**
     * Gets the bot_environmentvariabledefinition property value. 
     * @returns a bot
     */
    public get bot_environmentvariabledefinition() {
        return this._bot_environmentvariabledefinition;
    };
    /**
     * Sets the bot_environmentvariabledefinition property value. 
     * @param value Value to set for the bot_environmentvariabledefinition property.
     */
    public set bot_environmentvariabledefinition(value: Bot[] | undefined) {
        this._bot_environmentvariabledefinition = value;
    };
    /**
     * Gets the botcomponent_environmentvariabledefinition property value. 
     * @returns a botcomponent
     */
    public get botcomponent_environmentvariabledefinition() {
        return this._botcomponent_environmentvariabledefinition;
    };
    /**
     * Sets the botcomponent_environmentvariabledefinition property value. 
     * @param value Value to set for the botcomponent_environmentvariabledefinition property.
     */
    public set botcomponent_environmentvariabledefinition(value: Botcomponent[] | undefined) {
        this._botcomponent_environmentvariabledefinition = value;
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
     * Instantiates a new environmentvariabledefinition and sets the default values.
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
     * Gets the defaultvalue property value. 
     * @returns a string
     */
    public get defaultvalue() {
        return this._defaultvalue;
    };
    /**
     * Sets the defaultvalue property value. 
     * @param value Value to set for the defaultvalue property.
     */
    public set defaultvalue(value: string | undefined) {
        this._defaultvalue = value;
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
     * Gets the displayname property value. 
     * @returns a string
     */
    public get displayname() {
        return this._displayname;
    };
    /**
     * Sets the displayname property value. 
     * @param value Value to set for the displayname property.
     */
    public set displayname(value: string | undefined) {
        this._displayname = value;
    };
    /**
     * Gets the envdefinition_envdefinition property value. 
     * @returns a environmentvariabledefinition
     */
    public get envdefinition_envdefinition() {
        return this._envdefinition_envdefinition;
    };
    /**
     * Sets the envdefinition_envdefinition property value. 
     * @param value Value to set for the envdefinition_envdefinition property.
     */
    public set envdefinition_envdefinition(value: Environmentvariabledefinition[] | undefined) {
        this._envdefinition_envdefinition = value;
    };
    /**
     * Gets the environmentvariabledefinition_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get environmentvariabledefinition_AsyncOperations() {
        return this._environmentvariabledefinition_AsyncOperations;
    };
    /**
     * Sets the environmentvariabledefinition_AsyncOperations property value. 
     * @param value Value to set for the environmentvariabledefinition_AsyncOperations property.
     */
    public set environmentvariabledefinition_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._environmentvariabledefinition_AsyncOperations = value;
    };
    /**
     * Gets the environmentvariabledefinition_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get environmentvariabledefinition_BulkDeleteFailures() {
        return this._environmentvariabledefinition_BulkDeleteFailures;
    };
    /**
     * Sets the environmentvariabledefinition_BulkDeleteFailures property value. 
     * @param value Value to set for the environmentvariabledefinition_BulkDeleteFailures property.
     */
    public set environmentvariabledefinition_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._environmentvariabledefinition_BulkDeleteFailures = value;
    };
    /**
     * Gets the environmentvariabledefinition_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get environmentvariabledefinition_DuplicateBaseRecord() {
        return this._environmentvariabledefinition_DuplicateBaseRecord;
    };
    /**
     * Sets the environmentvariabledefinition_DuplicateBaseRecord property value. 
     * @param value Value to set for the environmentvariabledefinition_DuplicateBaseRecord property.
     */
    public set environmentvariabledefinition_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._environmentvariabledefinition_DuplicateBaseRecord = value;
    };
    /**
     * Gets the environmentvariabledefinition_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get environmentvariabledefinition_DuplicateMatchingRecord() {
        return this._environmentvariabledefinition_DuplicateMatchingRecord;
    };
    /**
     * Sets the environmentvariabledefinition_DuplicateMatchingRecord property value. 
     * @param value Value to set for the environmentvariabledefinition_DuplicateMatchingRecord property.
     */
    public set environmentvariabledefinition_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._environmentvariabledefinition_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the environmentvariabledefinition_environmentvariablevalue property value. 
     * @returns a environmentvariablevalue
     */
    public get environmentvariabledefinition_environmentvariablevalue() {
        return this._environmentvariabledefinition_environmentvariablevalue;
    };
    /**
     * Sets the environmentvariabledefinition_environmentvariablevalue property value. 
     * @param value Value to set for the environmentvariabledefinition_environmentvariablevalue property.
     */
    public set environmentvariabledefinition_environmentvariablevalue(value: Environmentvariablevalue[] | undefined) {
        this._environmentvariabledefinition_environmentvariablevalue = value;
    };
    /**
     * Gets the environmentvariabledefinition_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get environmentvariabledefinition_MailboxTrackingFolders() {
        return this._environmentvariabledefinition_MailboxTrackingFolders;
    };
    /**
     * Sets the environmentvariabledefinition_MailboxTrackingFolders property value. 
     * @param value Value to set for the environmentvariabledefinition_MailboxTrackingFolders property.
     */
    public set environmentvariabledefinition_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._environmentvariabledefinition_MailboxTrackingFolders = value;
    };
    /**
     * Gets the environmentvariabledefinition_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get environmentvariabledefinition_PrincipalObjectAttributeAccesses() {
        return this._environmentvariabledefinition_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the environmentvariabledefinition_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the environmentvariabledefinition_PrincipalObjectAttributeAccesses property.
     */
    public set environmentvariabledefinition_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._environmentvariabledefinition_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the environmentvariabledefinition_ProcessSession property value. 
     * @returns a processsession
     */
    public get environmentvariabledefinition_ProcessSession() {
        return this._environmentvariabledefinition_ProcessSession;
    };
    /**
     * Sets the environmentvariabledefinition_ProcessSession property value. 
     * @param value Value to set for the environmentvariabledefinition_ProcessSession property.
     */
    public set environmentvariabledefinition_ProcessSession(value: Processsession[] | undefined) {
        this._environmentvariabledefinition_ProcessSession = value;
    };
    /**
     * Gets the environmentvariabledefinition_SyncErrors property value. 
     * @returns a syncerror
     */
    public get environmentvariabledefinition_SyncErrors() {
        return this._environmentvariabledefinition_SyncErrors;
    };
    /**
     * Sets the environmentvariabledefinition_SyncErrors property value. 
     * @param value Value to set for the environmentvariabledefinition_SyncErrors property.
     */
    public set environmentvariabledefinition_SyncErrors(value: Syncerror[] | undefined) {
        this._environmentvariabledefinition_SyncErrors = value;
    };
    /**
     * Gets the environmentvariabledefinitionid property value. 
     * @returns a string
     */
    public get environmentvariabledefinitionid() {
        return this._environmentvariabledefinitionid;
    };
    /**
     * Sets the environmentvariabledefinitionid property value. 
     * @param value Value to set for the environmentvariabledefinitionid property.
     */
    public set environmentvariabledefinitionid(value: string | undefined) {
        this._environmentvariabledefinitionid = value;
    };
    /**
     * Gets the environmentvariabledefinitionidunique property value. 
     * @returns a string
     */
    public get environmentvariabledefinitionidunique() {
        return this._environmentvariabledefinitionidunique;
    };
    /**
     * Sets the environmentvariabledefinitionidunique property value. 
     * @param value Value to set for the environmentvariabledefinitionidunique property.
     */
    public set environmentvariabledefinitionidunique(value: string | undefined) {
        this._environmentvariabledefinitionidunique = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_connectionreferenceid_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._connectionreferenceid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._owninguser_value = n.getStringValue(); },
            "_parentdefinitionid_value": (o, n) => { (o as unknown as Environmentvariabledefinition)._parentdefinitionid_value = n.getStringValue(); },
            "apiid": (o, n) => { (o as unknown as Environmentvariabledefinition).apiid = n.getStringValue(); },
            "bot_environmentvariabledefinition": (o, n) => { (o as unknown as Environmentvariabledefinition).bot_environmentvariabledefinition = n.getCollectionOfObjectValues<Bot>(createBotFromDiscriminatorValue); },
            "botcomponent_environmentvariabledefinition": (o, n) => { (o as unknown as Environmentvariabledefinition).botcomponent_environmentvariabledefinition = n.getCollectionOfObjectValues<Botcomponent>(createBotcomponentFromDiscriminatorValue); },
            "componentstate": (o, n) => { (o as unknown as Environmentvariabledefinition).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Environmentvariabledefinition).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Environmentvariabledefinition).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Environmentvariabledefinition).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "defaultvalue": (o, n) => { (o as unknown as Environmentvariabledefinition).defaultvalue = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Environmentvariabledefinition).description = n.getStringValue(); },
            "displayname": (o, n) => { (o as unknown as Environmentvariabledefinition).displayname = n.getStringValue(); },
            "envdefinition_envdefinition": (o, n) => { (o as unknown as Environmentvariabledefinition).envdefinition_envdefinition = n.getCollectionOfObjectValues<Environmentvariabledefinition>(createEnvironmentvariabledefinitionFromDiscriminatorValue); },
            "environmentvariabledefinition_AsyncOperations": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinition_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "environmentvariabledefinition_BulkDeleteFailures": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinition_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "environmentvariabledefinition_DuplicateBaseRecord": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinition_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "environmentvariabledefinition_DuplicateMatchingRecord": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinition_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "environmentvariabledefinition_environmentvariablevalue": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinition_environmentvariablevalue = n.getCollectionOfObjectValues<Environmentvariablevalue>(createEnvironmentvariablevalueFromDiscriminatorValue); },
            "environmentvariabledefinition_MailboxTrackingFolders": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinition_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "environmentvariabledefinition_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinition_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "environmentvariabledefinition_ProcessSession": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinition_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "environmentvariabledefinition_SyncErrors": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinition_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "environmentvariabledefinitionid": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinitionid = n.getStringValue(); },
            "environmentvariabledefinitionidunique": (o, n) => { (o as unknown as Environmentvariabledefinition).environmentvariabledefinitionidunique = n.getStringValue(); },
            "hint": (o, n) => { (o as unknown as Environmentvariabledefinition).hint = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Environmentvariabledefinition).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Environmentvariabledefinition).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Environmentvariabledefinition).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Environmentvariabledefinition).ismanaged = n.getBooleanValue(); },
            "isrequired": (o, n) => { (o as unknown as Environmentvariabledefinition).isrequired = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Environmentvariabledefinition).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Environmentvariabledefinition).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Environmentvariabledefinition).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Environmentvariabledefinition).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Environmentvariabledefinition).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Environmentvariabledefinition).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Environmentvariabledefinition).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Environmentvariabledefinition).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Environmentvariabledefinition).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parameterkey": (o, n) => { (o as unknown as Environmentvariabledefinition).parameterkey = n.getStringValue(); },
            "parentDefinitionId": (o, n) => { (o as unknown as Environmentvariabledefinition).parentDefinitionId = n.getObjectValue<Environmentvariabledefinition>(createEnvironmentvariabledefinitionFromDiscriminatorValue); },
            "schemaname": (o, n) => { (o as unknown as Environmentvariabledefinition).schemaname = n.getStringValue(); },
            "secretstore": (o, n) => { (o as unknown as Environmentvariabledefinition).secretstore = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Environmentvariabledefinition).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Environmentvariabledefinition).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Environmentvariabledefinition).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Environmentvariabledefinition).timezoneruleversionnumber = n.getNumberValue(); },
            "type": (o, n) => { (o as unknown as Environmentvariabledefinition).type = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Environmentvariabledefinition).utcconversiontimezonecode = n.getNumberValue(); },
            "valueschema": (o, n) => { (o as unknown as Environmentvariabledefinition).valueschema = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Environmentvariabledefinition).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the hint property value. 
     * @returns a string
     */
    public get hint() {
        return this._hint;
    };
    /**
     * Sets the hint property value. 
     * @param value Value to set for the hint property.
     */
    public set hint(value: string | undefined) {
        this._hint = value;
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
     * Gets the isrequired property value. 
     * @returns a boolean
     */
    public get isrequired() {
        return this._isrequired;
    };
    /**
     * Sets the isrequired property value. 
     * @param value Value to set for the isrequired property.
     */
    public set isrequired(value: boolean | undefined) {
        this._isrequired = value;
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
     * Gets the parameterkey property value. 
     * @returns a string
     */
    public get parameterkey() {
        return this._parameterkey;
    };
    /**
     * Sets the parameterkey property value. 
     * @param value Value to set for the parameterkey property.
     */
    public set parameterkey(value: string | undefined) {
        this._parameterkey = value;
    };
    /**
     * Gets the parentDefinitionId property value. 
     * @returns a environmentvariabledefinition
     */
    public get parentDefinitionId() {
        return this._parentDefinitionId;
    };
    /**
     * Sets the parentDefinitionId property value. 
     * @param value Value to set for the ParentDefinitionId property.
     */
    public set parentDefinitionId(value: Environmentvariabledefinition | undefined) {
        this._parentDefinitionId = value;
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
     * Gets the secretstore property value. 
     * @returns a integer
     */
    public get secretstore() {
        return this._secretstore;
    };
    /**
     * Sets the secretstore property value. 
     * @param value Value to set for the secretstore property.
     */
    public set secretstore(value: number | undefined) {
        this._secretstore = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_connectionreferenceid_value", this._connectionreferenceid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentdefinitionid_value", this._parentdefinitionid_value);
        writer.writeStringValue("apiid", this.apiid);
        writer.writeCollectionOfObjectValues<Bot>("bot_environmentvariabledefinition", this.bot_environmentvariabledefinition);
        writer.writeCollectionOfObjectValues<Botcomponent>("botcomponent_environmentvariabledefinition", this.botcomponent_environmentvariabledefinition);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("defaultvalue", this.defaultvalue);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayname", this.displayname);
        writer.writeCollectionOfObjectValues<Environmentvariabledefinition>("envdefinition_envdefinition", this.envdefinition_envdefinition);
        writer.writeCollectionOfObjectValues<Asyncoperation>("environmentvariabledefinition_AsyncOperations", this.environmentvariabledefinition_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("environmentvariabledefinition_BulkDeleteFailures", this.environmentvariabledefinition_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("environmentvariabledefinition_DuplicateBaseRecord", this.environmentvariabledefinition_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("environmentvariabledefinition_DuplicateMatchingRecord", this.environmentvariabledefinition_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Environmentvariablevalue>("environmentvariabledefinition_environmentvariablevalue", this.environmentvariabledefinition_environmentvariablevalue);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("environmentvariabledefinition_MailboxTrackingFolders", this.environmentvariabledefinition_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("environmentvariabledefinition_PrincipalObjectAttributeAccesses", this.environmentvariabledefinition_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("environmentvariabledefinition_ProcessSession", this.environmentvariabledefinition_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("environmentvariabledefinition_SyncErrors", this.environmentvariabledefinition_SyncErrors);
        writer.writeStringValue("environmentvariabledefinitionid", this.environmentvariabledefinitionid);
        writer.writeStringValue("environmentvariabledefinitionidunique", this.environmentvariabledefinitionidunique);
        writer.writeStringValue("hint", this.hint);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isrequired", this.isrequired);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("parameterkey", this.parameterkey);
        writer.writeObjectValue<Environmentvariabledefinition>("parentDefinitionId", this.parentDefinitionId);
        writer.writeStringValue("schemaname", this.schemaname);
        writer.writeNumberValue("secretstore", this.secretstore);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("type", this.type);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeStringValue("valueschema", this.valueschema);
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
    /**
     * Gets the valueschema property value. 
     * @returns a string
     */
    public get valueschema() {
        return this._valueschema;
    };
    /**
     * Sets the valueschema property value. 
     * @param value Value to set for the valueschema property.
     */
    public set valueschema(value: string | undefined) {
        this._valueschema = value;
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
