import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyusd_configurationFromDiscriminatorValue} from './createMsdyusd_configurationFromDiscriminatorValue';
import {createMsdyusd_tracesourcesettingFromDiscriminatorValue} from './createMsdyusd_tracesourcesettingFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Mailboxtrackingfolder, Msdyusd_configuration, Msdyusd_tracesourcesetting, Principal, Principalobjectattributeaccess, Processsession, Processstage, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyusd_auditanddiagnosticssetting extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyusd_ATEnabled?: boolean | undefined;
    private _msdyusd_ATforActionCalls?: boolean | undefined;
    private _msdyusd_ATforAgentLogin?: boolean | undefined;
    private _msdyusd_ATforAgentScripts?: boolean | undefined;
    private _msdyusd_ATforCustomerSession?: boolean | undefined;
    private _msdyusd_ATforEvents?: boolean | undefined;
    private _msdyusd_ATforHostedControl?: boolean | undefined;
    private _msdyusd_ATforSubActionCalls?: boolean | undefined;
    private _msdyusd_ATforUIIAction?: boolean | undefined;
    private _msdyusd_ATforWindowsNavRules?: boolean | undefined;
    private _msdyusd_auditanddiagnosticssetting_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyusd_auditanddiagnosticssetting_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyusd_auditanddiagnosticssetting_ProcessSession?: Processsession[] | undefined;
    private _msdyusd_auditanddiagnosticssetting_SyncErrors?: Syncerror[] | undefined;
    private _msdyusd_auditanddiagnosticssettingid?: string | undefined;
    private _msdyusd_auditdiag_tracesourcesetting?: Msdyusd_tracesourcesetting[] | undefined;
    private _msdyusd_CacheSize?: number | undefined;
    private _msdyusd_configuration_auditanddiagnostics?: Msdyusd_configuration[] | undefined;
    private _msdyusd_CrashDumpEnabled?: boolean | undefined;
    private _msdyusd_DGTEnabled?: boolean | undefined;
    private _msdyusd_DGTVerbosityLevel?: number | undefined;
    private _msdyusd_EnableCaching?: boolean | undefined;
    private _msdyusd_ExitMonitoringEnabled?: boolean | undefined;
    private _msdyusd_isdefault?: boolean | undefined;
    private _msdyusd_LogsDirectory?: string | undefined;
    private _msdyusd_MaxDiagnosticLogsSizeInMB?: number | undefined;
    private _msdyusd_name?: string | undefined;
    private _msdyusd_ODDShortcut?: string | undefined;
    private _msdyusd_odperfbeginshortcut?: string | undefined;
    private _msdyusd_odperfendshortcut?: string | undefined;
    private _msdyusd_userschemasettings?: string | undefined;
    private _msdyusd_WEREnabled?: boolean | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _traversedpath?: string | undefined;
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
     * Gets the _stageid_value property value. 
     * @returns a string
     */
    public get _stageid_value() {
        return this.__stageid_value;
    };
    /**
     * Sets the _stageid_value property value. 
     * @param value Value to set for the _stageid_value property.
     */
    public set _stageid_value(value: string | undefined) {
        this.__stageid_value = value;
    };
    /**
     * Instantiates a new msdyusd_auditanddiagnosticssetting and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting)._stageid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyusd_ATEnabled": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATEnabled = n.getBooleanValue(); },
            "msdyusd_ATforActionCalls": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATforActionCalls = n.getBooleanValue(); },
            "msdyusd_ATforAgentLogin": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATforAgentLogin = n.getBooleanValue(); },
            "msdyusd_ATforAgentScripts": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATforAgentScripts = n.getBooleanValue(); },
            "msdyusd_ATforCustomerSession": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATforCustomerSession = n.getBooleanValue(); },
            "msdyusd_ATforEvents": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATforEvents = n.getBooleanValue(); },
            "msdyusd_ATforHostedControl": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATforHostedControl = n.getBooleanValue(); },
            "msdyusd_ATforSubActionCalls": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATforSubActionCalls = n.getBooleanValue(); },
            "msdyusd_ATforUIIAction": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATforUIIAction = n.getBooleanValue(); },
            "msdyusd_ATforWindowsNavRules": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ATforWindowsNavRules = n.getBooleanValue(); },
            "msdyusd_auditanddiagnosticssetting_AsyncOperations": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_auditanddiagnosticssetting_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyusd_auditanddiagnosticssetting_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_auditanddiagnosticssetting_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyusd_auditanddiagnosticssetting_ProcessSession": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_auditanddiagnosticssetting_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyusd_auditanddiagnosticssetting_SyncErrors": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_auditanddiagnosticssetting_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyusd_auditanddiagnosticssettingid": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_auditanddiagnosticssettingid = n.getStringValue(); },
            "msdyusd_auditdiag_tracesourcesetting": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_auditdiag_tracesourcesetting = n.getCollectionOfObjectValues<Msdyusd_tracesourcesetting>(createMsdyusd_tracesourcesettingFromDiscriminatorValue); },
            "msdyusd_CacheSize": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_CacheSize = n.getNumberValue(); },
            "msdyusd_configuration_auditanddiagnostics": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_configuration_auditanddiagnostics = n.getCollectionOfObjectValues<Msdyusd_configuration>(createMsdyusd_configurationFromDiscriminatorValue); },
            "msdyusd_CrashDumpEnabled": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_CrashDumpEnabled = n.getBooleanValue(); },
            "msdyusd_DGTEnabled": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_DGTEnabled = n.getBooleanValue(); },
            "msdyusd_DGTVerbosityLevel": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_DGTVerbosityLevel = n.getNumberValue(); },
            "msdyusd_EnableCaching": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_EnableCaching = n.getBooleanValue(); },
            "msdyusd_ExitMonitoringEnabled": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ExitMonitoringEnabled = n.getBooleanValue(); },
            "msdyusd_isdefault": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_isdefault = n.getBooleanValue(); },
            "msdyusd_LogsDirectory": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_LogsDirectory = n.getStringValue(); },
            "msdyusd_MaxDiagnosticLogsSizeInMB": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_MaxDiagnosticLogsSizeInMB = n.getNumberValue(); },
            "msdyusd_name": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_name = n.getStringValue(); },
            "msdyusd_ODDShortcut": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_ODDShortcut = n.getStringValue(); },
            "msdyusd_odperfbeginshortcut": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_odperfbeginshortcut = n.getStringValue(); },
            "msdyusd_odperfendshortcut": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_odperfendshortcut = n.getStringValue(); },
            "msdyusd_userschemasettings": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_userschemasettings = n.getStringValue(); },
            "msdyusd_WEREnabled": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).msdyusd_WEREnabled = n.getBooleanValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).timezoneruleversionnumber = n.getNumberValue(); },
            "traversedpath": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyusd_auditanddiagnosticssetting).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyusd_ATEnabled property value. 
     * @returns a boolean
     */
    public get msdyusd_ATEnabled() {
        return this._msdyusd_ATEnabled;
    };
    /**
     * Sets the msdyusd_ATEnabled property value. 
     * @param value Value to set for the msdyusd_ATEnabled property.
     */
    public set msdyusd_ATEnabled(value: boolean | undefined) {
        this._msdyusd_ATEnabled = value;
    };
    /**
     * Gets the msdyusd_ATforActionCalls property value. 
     * @returns a boolean
     */
    public get msdyusd_ATforActionCalls() {
        return this._msdyusd_ATforActionCalls;
    };
    /**
     * Sets the msdyusd_ATforActionCalls property value. 
     * @param value Value to set for the msdyusd_ATforActionCalls property.
     */
    public set msdyusd_ATforActionCalls(value: boolean | undefined) {
        this._msdyusd_ATforActionCalls = value;
    };
    /**
     * Gets the msdyusd_ATforAgentLogin property value. 
     * @returns a boolean
     */
    public get msdyusd_ATforAgentLogin() {
        return this._msdyusd_ATforAgentLogin;
    };
    /**
     * Sets the msdyusd_ATforAgentLogin property value. 
     * @param value Value to set for the msdyusd_ATforAgentLogin property.
     */
    public set msdyusd_ATforAgentLogin(value: boolean | undefined) {
        this._msdyusd_ATforAgentLogin = value;
    };
    /**
     * Gets the msdyusd_ATforAgentScripts property value. 
     * @returns a boolean
     */
    public get msdyusd_ATforAgentScripts() {
        return this._msdyusd_ATforAgentScripts;
    };
    /**
     * Sets the msdyusd_ATforAgentScripts property value. 
     * @param value Value to set for the msdyusd_ATforAgentScripts property.
     */
    public set msdyusd_ATforAgentScripts(value: boolean | undefined) {
        this._msdyusd_ATforAgentScripts = value;
    };
    /**
     * Gets the msdyusd_ATforCustomerSession property value. 
     * @returns a boolean
     */
    public get msdyusd_ATforCustomerSession() {
        return this._msdyusd_ATforCustomerSession;
    };
    /**
     * Sets the msdyusd_ATforCustomerSession property value. 
     * @param value Value to set for the msdyusd_ATforCustomerSession property.
     */
    public set msdyusd_ATforCustomerSession(value: boolean | undefined) {
        this._msdyusd_ATforCustomerSession = value;
    };
    /**
     * Gets the msdyusd_ATforEvents property value. 
     * @returns a boolean
     */
    public get msdyusd_ATforEvents() {
        return this._msdyusd_ATforEvents;
    };
    /**
     * Sets the msdyusd_ATforEvents property value. 
     * @param value Value to set for the msdyusd_ATforEvents property.
     */
    public set msdyusd_ATforEvents(value: boolean | undefined) {
        this._msdyusd_ATforEvents = value;
    };
    /**
     * Gets the msdyusd_ATforHostedControl property value. 
     * @returns a boolean
     */
    public get msdyusd_ATforHostedControl() {
        return this._msdyusd_ATforHostedControl;
    };
    /**
     * Sets the msdyusd_ATforHostedControl property value. 
     * @param value Value to set for the msdyusd_ATforHostedControl property.
     */
    public set msdyusd_ATforHostedControl(value: boolean | undefined) {
        this._msdyusd_ATforHostedControl = value;
    };
    /**
     * Gets the msdyusd_ATforSubActionCalls property value. 
     * @returns a boolean
     */
    public get msdyusd_ATforSubActionCalls() {
        return this._msdyusd_ATforSubActionCalls;
    };
    /**
     * Sets the msdyusd_ATforSubActionCalls property value. 
     * @param value Value to set for the msdyusd_ATforSubActionCalls property.
     */
    public set msdyusd_ATforSubActionCalls(value: boolean | undefined) {
        this._msdyusd_ATforSubActionCalls = value;
    };
    /**
     * Gets the msdyusd_ATforUIIAction property value. 
     * @returns a boolean
     */
    public get msdyusd_ATforUIIAction() {
        return this._msdyusd_ATforUIIAction;
    };
    /**
     * Sets the msdyusd_ATforUIIAction property value. 
     * @param value Value to set for the msdyusd_ATforUIIAction property.
     */
    public set msdyusd_ATforUIIAction(value: boolean | undefined) {
        this._msdyusd_ATforUIIAction = value;
    };
    /**
     * Gets the msdyusd_ATforWindowsNavRules property value. 
     * @returns a boolean
     */
    public get msdyusd_ATforWindowsNavRules() {
        return this._msdyusd_ATforWindowsNavRules;
    };
    /**
     * Sets the msdyusd_ATforWindowsNavRules property value. 
     * @param value Value to set for the msdyusd_ATforWindowsNavRules property.
     */
    public set msdyusd_ATforWindowsNavRules(value: boolean | undefined) {
        this._msdyusd_ATforWindowsNavRules = value;
    };
    /**
     * Gets the msdyusd_auditanddiagnosticssetting_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyusd_auditanddiagnosticssetting_AsyncOperations() {
        return this._msdyusd_auditanddiagnosticssetting_AsyncOperations;
    };
    /**
     * Sets the msdyusd_auditanddiagnosticssetting_AsyncOperations property value. 
     * @param value Value to set for the msdyusd_auditanddiagnosticssetting_AsyncOperations property.
     */
    public set msdyusd_auditanddiagnosticssetting_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyusd_auditanddiagnosticssetting_AsyncOperations = value;
    };
    /**
     * Gets the msdyusd_auditanddiagnosticssetting_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyusd_auditanddiagnosticssetting_BulkDeleteFailures() {
        return this._msdyusd_auditanddiagnosticssetting_BulkDeleteFailures;
    };
    /**
     * Sets the msdyusd_auditanddiagnosticssetting_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyusd_auditanddiagnosticssetting_BulkDeleteFailures property.
     */
    public set msdyusd_auditanddiagnosticssetting_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyusd_auditanddiagnosticssetting_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders() {
        return this._msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders property.
     */
    public set msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses() {
        return this._msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses property.
     */
    public set msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyusd_auditanddiagnosticssetting_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyusd_auditanddiagnosticssetting_ProcessSession() {
        return this._msdyusd_auditanddiagnosticssetting_ProcessSession;
    };
    /**
     * Sets the msdyusd_auditanddiagnosticssetting_ProcessSession property value. 
     * @param value Value to set for the msdyusd_auditanddiagnosticssetting_ProcessSession property.
     */
    public set msdyusd_auditanddiagnosticssetting_ProcessSession(value: Processsession[] | undefined) {
        this._msdyusd_auditanddiagnosticssetting_ProcessSession = value;
    };
    /**
     * Gets the msdyusd_auditanddiagnosticssetting_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyusd_auditanddiagnosticssetting_SyncErrors() {
        return this._msdyusd_auditanddiagnosticssetting_SyncErrors;
    };
    /**
     * Sets the msdyusd_auditanddiagnosticssetting_SyncErrors property value. 
     * @param value Value to set for the msdyusd_auditanddiagnosticssetting_SyncErrors property.
     */
    public set msdyusd_auditanddiagnosticssetting_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyusd_auditanddiagnosticssetting_SyncErrors = value;
    };
    /**
     * Gets the msdyusd_auditanddiagnosticssettingid property value. 
     * @returns a string
     */
    public get msdyusd_auditanddiagnosticssettingid() {
        return this._msdyusd_auditanddiagnosticssettingid;
    };
    /**
     * Sets the msdyusd_auditanddiagnosticssettingid property value. 
     * @param value Value to set for the msdyusd_auditanddiagnosticssettingid property.
     */
    public set msdyusd_auditanddiagnosticssettingid(value: string | undefined) {
        this._msdyusd_auditanddiagnosticssettingid = value;
    };
    /**
     * Gets the msdyusd_auditdiag_tracesourcesetting property value. 
     * @returns a msdyusd_tracesourcesetting
     */
    public get msdyusd_auditdiag_tracesourcesetting() {
        return this._msdyusd_auditdiag_tracesourcesetting;
    };
    /**
     * Sets the msdyusd_auditdiag_tracesourcesetting property value. 
     * @param value Value to set for the msdyusd_auditdiag_tracesourcesetting property.
     */
    public set msdyusd_auditdiag_tracesourcesetting(value: Msdyusd_tracesourcesetting[] | undefined) {
        this._msdyusd_auditdiag_tracesourcesetting = value;
    };
    /**
     * Gets the msdyusd_CacheSize property value. 
     * @returns a integer
     */
    public get msdyusd_CacheSize() {
        return this._msdyusd_CacheSize;
    };
    /**
     * Sets the msdyusd_CacheSize property value. 
     * @param value Value to set for the msdyusd_CacheSize property.
     */
    public set msdyusd_CacheSize(value: number | undefined) {
        this._msdyusd_CacheSize = value;
    };
    /**
     * Gets the msdyusd_configuration_auditanddiagnostics property value. 
     * @returns a msdyusd_configuration
     */
    public get msdyusd_configuration_auditanddiagnostics() {
        return this._msdyusd_configuration_auditanddiagnostics;
    };
    /**
     * Sets the msdyusd_configuration_auditanddiagnostics property value. 
     * @param value Value to set for the msdyusd_configuration_auditanddiagnostics property.
     */
    public set msdyusd_configuration_auditanddiagnostics(value: Msdyusd_configuration[] | undefined) {
        this._msdyusd_configuration_auditanddiagnostics = value;
    };
    /**
     * Gets the msdyusd_CrashDumpEnabled property value. 
     * @returns a boolean
     */
    public get msdyusd_CrashDumpEnabled() {
        return this._msdyusd_CrashDumpEnabled;
    };
    /**
     * Sets the msdyusd_CrashDumpEnabled property value. 
     * @param value Value to set for the msdyusd_CrashDumpEnabled property.
     */
    public set msdyusd_CrashDumpEnabled(value: boolean | undefined) {
        this._msdyusd_CrashDumpEnabled = value;
    };
    /**
     * Gets the msdyusd_DGTEnabled property value. 
     * @returns a boolean
     */
    public get msdyusd_DGTEnabled() {
        return this._msdyusd_DGTEnabled;
    };
    /**
     * Sets the msdyusd_DGTEnabled property value. 
     * @param value Value to set for the msdyusd_DGTEnabled property.
     */
    public set msdyusd_DGTEnabled(value: boolean | undefined) {
        this._msdyusd_DGTEnabled = value;
    };
    /**
     * Gets the msdyusd_DGTVerbosityLevel property value. 
     * @returns a integer
     */
    public get msdyusd_DGTVerbosityLevel() {
        return this._msdyusd_DGTVerbosityLevel;
    };
    /**
     * Sets the msdyusd_DGTVerbosityLevel property value. 
     * @param value Value to set for the msdyusd_DGTVerbosityLevel property.
     */
    public set msdyusd_DGTVerbosityLevel(value: number | undefined) {
        this._msdyusd_DGTVerbosityLevel = value;
    };
    /**
     * Gets the msdyusd_EnableCaching property value. 
     * @returns a boolean
     */
    public get msdyusd_EnableCaching() {
        return this._msdyusd_EnableCaching;
    };
    /**
     * Sets the msdyusd_EnableCaching property value. 
     * @param value Value to set for the msdyusd_EnableCaching property.
     */
    public set msdyusd_EnableCaching(value: boolean | undefined) {
        this._msdyusd_EnableCaching = value;
    };
    /**
     * Gets the msdyusd_ExitMonitoringEnabled property value. 
     * @returns a boolean
     */
    public get msdyusd_ExitMonitoringEnabled() {
        return this._msdyusd_ExitMonitoringEnabled;
    };
    /**
     * Sets the msdyusd_ExitMonitoringEnabled property value. 
     * @param value Value to set for the msdyusd_ExitMonitoringEnabled property.
     */
    public set msdyusd_ExitMonitoringEnabled(value: boolean | undefined) {
        this._msdyusd_ExitMonitoringEnabled = value;
    };
    /**
     * Gets the msdyusd_isdefault property value. 
     * @returns a boolean
     */
    public get msdyusd_isdefault() {
        return this._msdyusd_isdefault;
    };
    /**
     * Sets the msdyusd_isdefault property value. 
     * @param value Value to set for the msdyusd_isdefault property.
     */
    public set msdyusd_isdefault(value: boolean | undefined) {
        this._msdyusd_isdefault = value;
    };
    /**
     * Gets the msdyusd_LogsDirectory property value. 
     * @returns a string
     */
    public get msdyusd_LogsDirectory() {
        return this._msdyusd_LogsDirectory;
    };
    /**
     * Sets the msdyusd_LogsDirectory property value. 
     * @param value Value to set for the msdyusd_LogsDirectory property.
     */
    public set msdyusd_LogsDirectory(value: string | undefined) {
        this._msdyusd_LogsDirectory = value;
    };
    /**
     * Gets the msdyusd_MaxDiagnosticLogsSizeInMB property value. 
     * @returns a integer
     */
    public get msdyusd_MaxDiagnosticLogsSizeInMB() {
        return this._msdyusd_MaxDiagnosticLogsSizeInMB;
    };
    /**
     * Sets the msdyusd_MaxDiagnosticLogsSizeInMB property value. 
     * @param value Value to set for the msdyusd_MaxDiagnosticLogsSizeInMB property.
     */
    public set msdyusd_MaxDiagnosticLogsSizeInMB(value: number | undefined) {
        this._msdyusd_MaxDiagnosticLogsSizeInMB = value;
    };
    /**
     * Gets the msdyusd_name property value. 
     * @returns a string
     */
    public get msdyusd_name() {
        return this._msdyusd_name;
    };
    /**
     * Sets the msdyusd_name property value. 
     * @param value Value to set for the msdyusd_name property.
     */
    public set msdyusd_name(value: string | undefined) {
        this._msdyusd_name = value;
    };
    /**
     * Gets the msdyusd_ODDShortcut property value. 
     * @returns a string
     */
    public get msdyusd_ODDShortcut() {
        return this._msdyusd_ODDShortcut;
    };
    /**
     * Sets the msdyusd_ODDShortcut property value. 
     * @param value Value to set for the msdyusd_ODDShortcut property.
     */
    public set msdyusd_ODDShortcut(value: string | undefined) {
        this._msdyusd_ODDShortcut = value;
    };
    /**
     * Gets the msdyusd_odperfbeginshortcut property value. 
     * @returns a string
     */
    public get msdyusd_odperfbeginshortcut() {
        return this._msdyusd_odperfbeginshortcut;
    };
    /**
     * Sets the msdyusd_odperfbeginshortcut property value. 
     * @param value Value to set for the msdyusd_odperfbeginshortcut property.
     */
    public set msdyusd_odperfbeginshortcut(value: string | undefined) {
        this._msdyusd_odperfbeginshortcut = value;
    };
    /**
     * Gets the msdyusd_odperfendshortcut property value. 
     * @returns a string
     */
    public get msdyusd_odperfendshortcut() {
        return this._msdyusd_odperfendshortcut;
    };
    /**
     * Sets the msdyusd_odperfendshortcut property value. 
     * @param value Value to set for the msdyusd_odperfendshortcut property.
     */
    public set msdyusd_odperfendshortcut(value: string | undefined) {
        this._msdyusd_odperfendshortcut = value;
    };
    /**
     * Gets the msdyusd_userschemasettings property value. 
     * @returns a string
     */
    public get msdyusd_userschemasettings() {
        return this._msdyusd_userschemasettings;
    };
    /**
     * Sets the msdyusd_userschemasettings property value. 
     * @param value Value to set for the msdyusd_userschemasettings property.
     */
    public set msdyusd_userschemasettings(value: string | undefined) {
        this._msdyusd_userschemasettings = value;
    };
    /**
     * Gets the msdyusd_WEREnabled property value. 
     * @returns a boolean
     */
    public get msdyusd_WEREnabled() {
        return this._msdyusd_WEREnabled;
    };
    /**
     * Sets the msdyusd_WEREnabled property value. 
     * @param value Value to set for the msdyusd_WEREnabled property.
     */
    public set msdyusd_WEREnabled(value: boolean | undefined) {
        this._msdyusd_WEREnabled = value;
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
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
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
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyusd_ATEnabled", this.msdyusd_ATEnabled);
        writer.writeBooleanValue("msdyusd_ATforActionCalls", this.msdyusd_ATforActionCalls);
        writer.writeBooleanValue("msdyusd_ATforAgentLogin", this.msdyusd_ATforAgentLogin);
        writer.writeBooleanValue("msdyusd_ATforAgentScripts", this.msdyusd_ATforAgentScripts);
        writer.writeBooleanValue("msdyusd_ATforCustomerSession", this.msdyusd_ATforCustomerSession);
        writer.writeBooleanValue("msdyusd_ATforEvents", this.msdyusd_ATforEvents);
        writer.writeBooleanValue("msdyusd_ATforHostedControl", this.msdyusd_ATforHostedControl);
        writer.writeBooleanValue("msdyusd_ATforSubActionCalls", this.msdyusd_ATforSubActionCalls);
        writer.writeBooleanValue("msdyusd_ATforUIIAction", this.msdyusd_ATforUIIAction);
        writer.writeBooleanValue("msdyusd_ATforWindowsNavRules", this.msdyusd_ATforWindowsNavRules);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyusd_auditanddiagnosticssetting_AsyncOperations", this.msdyusd_auditanddiagnosticssetting_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyusd_auditanddiagnosticssetting_BulkDeleteFailures", this.msdyusd_auditanddiagnosticssetting_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders", this.msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses", this.msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyusd_auditanddiagnosticssetting_ProcessSession", this.msdyusd_auditanddiagnosticssetting_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyusd_auditanddiagnosticssetting_SyncErrors", this.msdyusd_auditanddiagnosticssetting_SyncErrors);
        writer.writeStringValue("msdyusd_auditanddiagnosticssettingid", this.msdyusd_auditanddiagnosticssettingid);
        writer.writeCollectionOfObjectValues<Msdyusd_tracesourcesetting>("msdyusd_auditdiag_tracesourcesetting", this.msdyusd_auditdiag_tracesourcesetting);
        writer.writeNumberValue("msdyusd_CacheSize", this.msdyusd_CacheSize);
        writer.writeCollectionOfObjectValues<Msdyusd_configuration>("msdyusd_configuration_auditanddiagnostics", this.msdyusd_configuration_auditanddiagnostics);
        writer.writeBooleanValue("msdyusd_CrashDumpEnabled", this.msdyusd_CrashDumpEnabled);
        writer.writeBooleanValue("msdyusd_DGTEnabled", this.msdyusd_DGTEnabled);
        writer.writeNumberValue("msdyusd_DGTVerbosityLevel", this.msdyusd_DGTVerbosityLevel);
        writer.writeBooleanValue("msdyusd_EnableCaching", this.msdyusd_EnableCaching);
        writer.writeBooleanValue("msdyusd_ExitMonitoringEnabled", this.msdyusd_ExitMonitoringEnabled);
        writer.writeBooleanValue("msdyusd_isdefault", this.msdyusd_isdefault);
        writer.writeStringValue("msdyusd_LogsDirectory", this.msdyusd_LogsDirectory);
        writer.writeNumberValue("msdyusd_MaxDiagnosticLogsSizeInMB", this.msdyusd_MaxDiagnosticLogsSizeInMB);
        writer.writeStringValue("msdyusd_name", this.msdyusd_name);
        writer.writeStringValue("msdyusd_ODDShortcut", this.msdyusd_ODDShortcut);
        writer.writeStringValue("msdyusd_odperfbeginshortcut", this.msdyusd_odperfbeginshortcut);
        writer.writeStringValue("msdyusd_odperfendshortcut", this.msdyusd_odperfendshortcut);
        writer.writeStringValue("msdyusd_userschemasettings", this.msdyusd_userschemasettings);
        writer.writeBooleanValue("msdyusd_WEREnabled", this.msdyusd_WEREnabled);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Processstage>("stageid", this.stageid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a processstage
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: Processstage | undefined) {
        this._stageid = value;
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
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
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
