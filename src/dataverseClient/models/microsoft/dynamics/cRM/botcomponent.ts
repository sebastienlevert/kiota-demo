import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBotcomponentFromDiscriminatorValue} from './createBotcomponentFromDiscriminatorValue';
import {createBotFromDiscriminatorValue} from './createBotFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createEnvironmentvariabledefinitionFromDiscriminatorValue} from './createEnvironmentvariabledefinitionFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bot, Bulkdeletefailure, Businessunit, Crmbaseentity, Environmentvariabledefinition, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Workflow} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Botcomponent extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentbotcomponentid_value?: string | undefined;
    private _accentcolor?: string | undefined;
    private _bot_botcomponent?: Bot[] | undefined;
    private _botcomponent_AsyncOperations?: Asyncoperation[] | undefined;
    private _botcomponent_botcomponent?: Botcomponent[] | undefined;
    private _botcomponent_botcomponent_referenced?: Botcomponent[] | undefined;
    private _botcomponent_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _botcomponent_environmentvariabledefinition?: Environmentvariabledefinition[] | undefined;
    private _botcomponent_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _botcomponent_parent_botcomponent?: Botcomponent[] | undefined;
    private _botcomponent_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _botcomponent_ProcessSession?: Processsession[] | undefined;
    private _botcomponent_SyncErrors?: Syncerror[] | undefined;
    private _botcomponent_workflow?: Workflow[] | undefined;
    private _botcomponentid?: string | undefined;
    private _category?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _componenttype?: number | undefined;
    private _content?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _data?: string | undefined;
    private _description?: string | undefined;
    private _helplink?: string | undefined;
    private _iconurl?: string | undefined;
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
    private _parentBotComponentId?: Botcomponent | undefined;
    private _reusepolicy?: number | undefined;
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
     * Gets the _parentbotcomponentid_value property value. 
     * @returns a string
     */
    public get _parentbotcomponentid_value() {
        return this.__parentbotcomponentid_value;
    };
    /**
     * Sets the _parentbotcomponentid_value property value. 
     * @param value Value to set for the _parentbotcomponentid_value property.
     */
    public set _parentbotcomponentid_value(value: string | undefined) {
        this.__parentbotcomponentid_value = value;
    };
    /**
     * Gets the accentcolor property value. 
     * @returns a string
     */
    public get accentcolor() {
        return this._accentcolor;
    };
    /**
     * Sets the accentcolor property value. 
     * @param value Value to set for the accentcolor property.
     */
    public set accentcolor(value: string | undefined) {
        this._accentcolor = value;
    };
    /**
     * Gets the bot_botcomponent property value. 
     * @returns a bot
     */
    public get bot_botcomponent() {
        return this._bot_botcomponent;
    };
    /**
     * Sets the bot_botcomponent property value. 
     * @param value Value to set for the bot_botcomponent property.
     */
    public set bot_botcomponent(value: Bot[] | undefined) {
        this._bot_botcomponent = value;
    };
    /**
     * Gets the botcomponent_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get botcomponent_AsyncOperations() {
        return this._botcomponent_AsyncOperations;
    };
    /**
     * Sets the botcomponent_AsyncOperations property value. 
     * @param value Value to set for the botcomponent_AsyncOperations property.
     */
    public set botcomponent_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._botcomponent_AsyncOperations = value;
    };
    /**
     * Gets the botcomponent_botcomponent property value. 
     * @returns a botcomponent
     */
    public get botcomponent_botcomponent() {
        return this._botcomponent_botcomponent;
    };
    /**
     * Sets the botcomponent_botcomponent property value. 
     * @param value Value to set for the botcomponent_botcomponent property.
     */
    public set botcomponent_botcomponent(value: Botcomponent[] | undefined) {
        this._botcomponent_botcomponent = value;
    };
    /**
     * Gets the botcomponent_botcomponent_referenced property value. 
     * @returns a botcomponent
     */
    public get botcomponent_botcomponent_referenced() {
        return this._botcomponent_botcomponent_referenced;
    };
    /**
     * Sets the botcomponent_botcomponent_referenced property value. 
     * @param value Value to set for the botcomponent_botcomponent_referenced property.
     */
    public set botcomponent_botcomponent_referenced(value: Botcomponent[] | undefined) {
        this._botcomponent_botcomponent_referenced = value;
    };
    /**
     * Gets the botcomponent_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get botcomponent_BulkDeleteFailures() {
        return this._botcomponent_BulkDeleteFailures;
    };
    /**
     * Sets the botcomponent_BulkDeleteFailures property value. 
     * @param value Value to set for the botcomponent_BulkDeleteFailures property.
     */
    public set botcomponent_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._botcomponent_BulkDeleteFailures = value;
    };
    /**
     * Gets the botcomponent_environmentvariabledefinition property value. 
     * @returns a environmentvariabledefinition
     */
    public get botcomponent_environmentvariabledefinition() {
        return this._botcomponent_environmentvariabledefinition;
    };
    /**
     * Sets the botcomponent_environmentvariabledefinition property value. 
     * @param value Value to set for the botcomponent_environmentvariabledefinition property.
     */
    public set botcomponent_environmentvariabledefinition(value: Environmentvariabledefinition[] | undefined) {
        this._botcomponent_environmentvariabledefinition = value;
    };
    /**
     * Gets the botcomponent_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get botcomponent_MailboxTrackingFolders() {
        return this._botcomponent_MailboxTrackingFolders;
    };
    /**
     * Sets the botcomponent_MailboxTrackingFolders property value. 
     * @param value Value to set for the botcomponent_MailboxTrackingFolders property.
     */
    public set botcomponent_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._botcomponent_MailboxTrackingFolders = value;
    };
    /**
     * Gets the botcomponent_parent_botcomponent property value. 
     * @returns a botcomponent
     */
    public get botcomponent_parent_botcomponent() {
        return this._botcomponent_parent_botcomponent;
    };
    /**
     * Sets the botcomponent_parent_botcomponent property value. 
     * @param value Value to set for the botcomponent_parent_botcomponent property.
     */
    public set botcomponent_parent_botcomponent(value: Botcomponent[] | undefined) {
        this._botcomponent_parent_botcomponent = value;
    };
    /**
     * Gets the botcomponent_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get botcomponent_PrincipalObjectAttributeAccesses() {
        return this._botcomponent_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the botcomponent_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the botcomponent_PrincipalObjectAttributeAccesses property.
     */
    public set botcomponent_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._botcomponent_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the botcomponent_ProcessSession property value. 
     * @returns a processsession
     */
    public get botcomponent_ProcessSession() {
        return this._botcomponent_ProcessSession;
    };
    /**
     * Sets the botcomponent_ProcessSession property value. 
     * @param value Value to set for the botcomponent_ProcessSession property.
     */
    public set botcomponent_ProcessSession(value: Processsession[] | undefined) {
        this._botcomponent_ProcessSession = value;
    };
    /**
     * Gets the botcomponent_SyncErrors property value. 
     * @returns a syncerror
     */
    public get botcomponent_SyncErrors() {
        return this._botcomponent_SyncErrors;
    };
    /**
     * Sets the botcomponent_SyncErrors property value. 
     * @param value Value to set for the botcomponent_SyncErrors property.
     */
    public set botcomponent_SyncErrors(value: Syncerror[] | undefined) {
        this._botcomponent_SyncErrors = value;
    };
    /**
     * Gets the botcomponent_workflow property value. 
     * @returns a workflow
     */
    public get botcomponent_workflow() {
        return this._botcomponent_workflow;
    };
    /**
     * Sets the botcomponent_workflow property value. 
     * @param value Value to set for the botcomponent_workflow property.
     */
    public set botcomponent_workflow(value: Workflow[] | undefined) {
        this._botcomponent_workflow = value;
    };
    /**
     * Gets the botcomponentid property value. 
     * @returns a string
     */
    public get botcomponentid() {
        return this._botcomponentid;
    };
    /**
     * Sets the botcomponentid property value. 
     * @param value Value to set for the botcomponentid property.
     */
    public set botcomponentid(value: string | undefined) {
        this._botcomponentid = value;
    };
    /**
     * Gets the category property value. 
     * @returns a string
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. 
     * @param value Value to set for the category property.
     */
    public set category(value: string | undefined) {
        this._category = value;
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
     * Gets the componenttype property value. 
     * @returns a integer
     */
    public get componenttype() {
        return this._componenttype;
    };
    /**
     * Sets the componenttype property value. 
     * @param value Value to set for the componenttype property.
     */
    public set componenttype(value: number | undefined) {
        this._componenttype = value;
    };
    /**
     * Instantiates a new botcomponent and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. 
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. 
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
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
     * Gets the data property value. 
     * @returns a string
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. 
     * @param value Value to set for the data property.
     */
    public set data(value: string | undefined) {
        this._data = value;
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Botcomponent)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Botcomponent)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Botcomponent)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Botcomponent)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Botcomponent)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Botcomponent)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Botcomponent)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Botcomponent)._owninguser_value = n.getStringValue(); },
            "_parentbotcomponentid_value": (o, n) => { (o as unknown as Botcomponent)._parentbotcomponentid_value = n.getStringValue(); },
            "accentcolor": (o, n) => { (o as unknown as Botcomponent).accentcolor = n.getStringValue(); },
            "bot_botcomponent": (o, n) => { (o as unknown as Botcomponent).bot_botcomponent = n.getCollectionOfObjectValues<Bot>(createBotFromDiscriminatorValue); },
            "botcomponent_AsyncOperations": (o, n) => { (o as unknown as Botcomponent).botcomponent_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "botcomponent_botcomponent": (o, n) => { (o as unknown as Botcomponent).botcomponent_botcomponent = n.getCollectionOfObjectValues<Botcomponent>(createBotcomponentFromDiscriminatorValue); },
            "botcomponent_botcomponent_referenced": (o, n) => { (o as unknown as Botcomponent).botcomponent_botcomponent_referenced = n.getCollectionOfObjectValues<Botcomponent>(createBotcomponentFromDiscriminatorValue); },
            "botcomponent_BulkDeleteFailures": (o, n) => { (o as unknown as Botcomponent).botcomponent_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "botcomponent_environmentvariabledefinition": (o, n) => { (o as unknown as Botcomponent).botcomponent_environmentvariabledefinition = n.getCollectionOfObjectValues<Environmentvariabledefinition>(createEnvironmentvariabledefinitionFromDiscriminatorValue); },
            "botcomponent_MailboxTrackingFolders": (o, n) => { (o as unknown as Botcomponent).botcomponent_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "botcomponent_parent_botcomponent": (o, n) => { (o as unknown as Botcomponent).botcomponent_parent_botcomponent = n.getCollectionOfObjectValues<Botcomponent>(createBotcomponentFromDiscriminatorValue); },
            "botcomponent_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Botcomponent).botcomponent_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "botcomponent_ProcessSession": (o, n) => { (o as unknown as Botcomponent).botcomponent_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "botcomponent_SyncErrors": (o, n) => { (o as unknown as Botcomponent).botcomponent_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "botcomponent_workflow": (o, n) => { (o as unknown as Botcomponent).botcomponent_workflow = n.getCollectionOfObjectValues<Workflow>(createWorkflowFromDiscriminatorValue); },
            "botcomponentid": (o, n) => { (o as unknown as Botcomponent).botcomponentid = n.getStringValue(); },
            "category": (o, n) => { (o as unknown as Botcomponent).category = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Botcomponent).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Botcomponent).componentstate = n.getNumberValue(); },
            "componenttype": (o, n) => { (o as unknown as Botcomponent).componenttype = n.getNumberValue(); },
            "content": (o, n) => { (o as unknown as Botcomponent).content = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Botcomponent).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Botcomponent).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Botcomponent).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "data": (o, n) => { (o as unknown as Botcomponent).data = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Botcomponent).description = n.getStringValue(); },
            "helplink": (o, n) => { (o as unknown as Botcomponent).helplink = n.getStringValue(); },
            "iconurl": (o, n) => { (o as unknown as Botcomponent).iconurl = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Botcomponent).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Botcomponent).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Botcomponent).ismanaged = n.getBooleanValue(); },
            "language": (o, n) => { (o as unknown as Botcomponent).language = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Botcomponent).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Botcomponent).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Botcomponent).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Botcomponent).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Botcomponent).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Botcomponent).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Botcomponent).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Botcomponent).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Botcomponent).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Botcomponent).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentBotComponentId": (o, n) => { (o as unknown as Botcomponent).parentBotComponentId = n.getObjectValue<Botcomponent>(createBotcomponentFromDiscriminatorValue); },
            "reusepolicy": (o, n) => { (o as unknown as Botcomponent).reusepolicy = n.getNumberValue(); },
            "schemaname": (o, n) => { (o as unknown as Botcomponent).schemaname = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Botcomponent).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Botcomponent).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Botcomponent).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Botcomponent).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Botcomponent).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Botcomponent).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the helplink property value. 
     * @returns a string
     */
    public get helplink() {
        return this._helplink;
    };
    /**
     * Sets the helplink property value. 
     * @param value Value to set for the helplink property.
     */
    public set helplink(value: string | undefined) {
        this._helplink = value;
    };
    /**
     * Gets the iconurl property value. 
     * @returns a string
     */
    public get iconurl() {
        return this._iconurl;
    };
    /**
     * Sets the iconurl property value. 
     * @param value Value to set for the iconurl property.
     */
    public set iconurl(value: string | undefined) {
        this._iconurl = value;
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
     * Gets the parentBotComponentId property value. 
     * @returns a botcomponent
     */
    public get parentBotComponentId() {
        return this._parentBotComponentId;
    };
    /**
     * Sets the parentBotComponentId property value. 
     * @param value Value to set for the ParentBotComponentId property.
     */
    public set parentBotComponentId(value: Botcomponent | undefined) {
        this._parentBotComponentId = value;
    };
    /**
     * Gets the reusepolicy property value. 
     * @returns a integer
     */
    public get reusepolicy() {
        return this._reusepolicy;
    };
    /**
     * Sets the reusepolicy property value. 
     * @param value Value to set for the reusepolicy property.
     */
    public set reusepolicy(value: number | undefined) {
        this._reusepolicy = value;
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
        writer.writeStringValue("_parentbotcomponentid_value", this._parentbotcomponentid_value);
        writer.writeStringValue("accentcolor", this.accentcolor);
        writer.writeCollectionOfObjectValues<Bot>("bot_botcomponent", this.bot_botcomponent);
        writer.writeCollectionOfObjectValues<Asyncoperation>("botcomponent_AsyncOperations", this.botcomponent_AsyncOperations);
        writer.writeCollectionOfObjectValues<Botcomponent>("botcomponent_botcomponent", this.botcomponent_botcomponent);
        writer.writeCollectionOfObjectValues<Botcomponent>("botcomponent_botcomponent_referenced", this.botcomponent_botcomponent_referenced);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("botcomponent_BulkDeleteFailures", this.botcomponent_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Environmentvariabledefinition>("botcomponent_environmentvariabledefinition", this.botcomponent_environmentvariabledefinition);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("botcomponent_MailboxTrackingFolders", this.botcomponent_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Botcomponent>("botcomponent_parent_botcomponent", this.botcomponent_parent_botcomponent);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("botcomponent_PrincipalObjectAttributeAccesses", this.botcomponent_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("botcomponent_ProcessSession", this.botcomponent_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("botcomponent_SyncErrors", this.botcomponent_SyncErrors);
        writer.writeCollectionOfObjectValues<Workflow>("botcomponent_workflow", this.botcomponent_workflow);
        writer.writeStringValue("botcomponentid", this.botcomponentid);
        writer.writeStringValue("category", this.category);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeNumberValue("componenttype", this.componenttype);
        writer.writeStringValue("content", this.content);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("data", this.data);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("helplink", this.helplink);
        writer.writeStringValue("iconurl", this.iconurl);
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
        writer.writeObjectValue<Botcomponent>("parentBotComponentId", this.parentBotComponentId);
        writer.writeNumberValue("reusepolicy", this.reusepolicy);
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
