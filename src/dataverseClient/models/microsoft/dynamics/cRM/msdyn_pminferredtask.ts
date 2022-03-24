import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_pmrecordingFromDiscriminatorValue} from './createMsdyn_pmrecordingFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Fileattachment, Mailboxtrackingfolder, Msdyn_pmrecording, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_pminferredtask extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_automationdata?: string | undefined;
    private _msdyn_automationstatus?: number | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_inputdatabinding?: string | undefined;
    private _msdyn_isreportavailable?: boolean | undefined;
    private _msdyn_iterationid?: string | undefined;
    private _msdyn_lasterrors?: string | undefined;
    private _msdyn_lasterrorsreport?: string | undefined;
    private _msdyn_lasterrorsreport_name?: string | undefined;
    private _msdyn_lastreportrefreshdate?: Date | undefined;
    private _msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask?: Msdyn_pmrecording[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_outputdata?: string | undefined;
    private _msdyn_pminferredtask_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_pminferredtask_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_pminferredtask_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_pminferredtask_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_pminferredtask_FileAttachments?: Fileattachment[] | undefined;
    private _msdyn_pminferredtask_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_pminferredtask_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_pminferredtask_ProcessSession?: Processsession[] | undefined;
    private _msdyn_pminferredtask_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_pminferredtaskid?: string | undefined;
    private _msdyn_reportdata?: string | undefined;
    private _msdyn_reportprovisioningstatus?: number | undefined;
    private _msdyn_sharedrecordingmetadata?: string | undefined;
    private _msdyn_source?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Instantiates a new msdyn_pminferredtask and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_pminferredtask)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_pminferredtask)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_pminferredtask)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_pminferredtask)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_pminferredtask)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_pminferredtask)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_pminferredtask)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_pminferredtask)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_pminferredtask).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_pminferredtask).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_pminferredtask).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_pminferredtask).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_pminferredtask).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_pminferredtask).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_pminferredtask).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_pminferredtask).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_pminferredtask).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_pminferredtask).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_pminferredtask).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_automationdata": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_automationdata = n.getStringValue(); },
            "msdyn_automationstatus": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_automationstatus = n.getNumberValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_description = n.getStringValue(); },
            "msdyn_inputdatabinding": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_inputdatabinding = n.getStringValue(); },
            "msdyn_isreportavailable": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_isreportavailable = n.getBooleanValue(); },
            "msdyn_iterationid": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_iterationid = n.getStringValue(); },
            "msdyn_lasterrors": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_lasterrors = n.getStringValue(); },
            "msdyn_lasterrorsreport": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_lasterrorsreport = n.getStringValue(); },
            "msdyn_lasterrorsreport_name": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_lasterrorsreport_name = n.getStringValue(); },
            "msdyn_lastreportrefreshdate": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_lastreportrefreshdate = n.getDateValue(); },
            "msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask = n.getCollectionOfObjectValues<Msdyn_pmrecording>(createMsdyn_pmrecordingFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_name = n.getStringValue(); },
            "msdyn_outputdata": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_outputdata = n.getStringValue(); },
            "msdyn_pminferredtask_AsyncOperations": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtask_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_pminferredtask_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtask_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_pminferredtask_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtask_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_pminferredtask_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtask_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_pminferredtask_FileAttachments": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtask_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "msdyn_pminferredtask_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtask_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_pminferredtask_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtask_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_pminferredtask_ProcessSession": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtask_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_pminferredtask_SyncErrors": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtask_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_pminferredtaskid": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_pminferredtaskid = n.getStringValue(); },
            "msdyn_reportdata": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_reportdata = n.getStringValue(); },
            "msdyn_reportprovisioningstatus": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_reportprovisioningstatus = n.getNumberValue(); },
            "msdyn_sharedrecordingmetadata": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_sharedrecordingmetadata = n.getStringValue(); },
            "msdyn_source": (o, n) => { (o as unknown as Msdyn_pminferredtask).msdyn_source = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_pminferredtask).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_pminferredtask).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_pminferredtask).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_pminferredtask).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_pminferredtask).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_pminferredtask).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_pminferredtask).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_pminferredtask).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_pminferredtask).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_pminferredtask).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_pminferredtask).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_pminferredtask).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_automationdata property value. 
     * @returns a string
     */
    public get msdyn_automationdata() {
        return this._msdyn_automationdata;
    };
    /**
     * Sets the msdyn_automationdata property value. 
     * @param value Value to set for the msdyn_automationdata property.
     */
    public set msdyn_automationdata(value: string | undefined) {
        this._msdyn_automationdata = value;
    };
    /**
     * Gets the msdyn_automationstatus property value. 
     * @returns a integer
     */
    public get msdyn_automationstatus() {
        return this._msdyn_automationstatus;
    };
    /**
     * Sets the msdyn_automationstatus property value. 
     * @param value Value to set for the msdyn_automationstatus property.
     */
    public set msdyn_automationstatus(value: number | undefined) {
        this._msdyn_automationstatus = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_inputdatabinding property value. 
     * @returns a string
     */
    public get msdyn_inputdatabinding() {
        return this._msdyn_inputdatabinding;
    };
    /**
     * Sets the msdyn_inputdatabinding property value. 
     * @param value Value to set for the msdyn_inputdatabinding property.
     */
    public set msdyn_inputdatabinding(value: string | undefined) {
        this._msdyn_inputdatabinding = value;
    };
    /**
     * Gets the msdyn_isreportavailable property value. 
     * @returns a boolean
     */
    public get msdyn_isreportavailable() {
        return this._msdyn_isreportavailable;
    };
    /**
     * Sets the msdyn_isreportavailable property value. 
     * @param value Value to set for the msdyn_isreportavailable property.
     */
    public set msdyn_isreportavailable(value: boolean | undefined) {
        this._msdyn_isreportavailable = value;
    };
    /**
     * Gets the msdyn_iterationid property value. 
     * @returns a string
     */
    public get msdyn_iterationid() {
        return this._msdyn_iterationid;
    };
    /**
     * Sets the msdyn_iterationid property value. 
     * @param value Value to set for the msdyn_iterationid property.
     */
    public set msdyn_iterationid(value: string | undefined) {
        this._msdyn_iterationid = value;
    };
    /**
     * Gets the msdyn_lasterrors property value. 
     * @returns a string
     */
    public get msdyn_lasterrors() {
        return this._msdyn_lasterrors;
    };
    /**
     * Sets the msdyn_lasterrors property value. 
     * @param value Value to set for the msdyn_lasterrors property.
     */
    public set msdyn_lasterrors(value: string | undefined) {
        this._msdyn_lasterrors = value;
    };
    /**
     * Gets the msdyn_lasterrorsreport property value. 
     * @returns a binary
     */
    public get msdyn_lasterrorsreport() {
        return this._msdyn_lasterrorsreport;
    };
    /**
     * Sets the msdyn_lasterrorsreport property value. 
     * @param value Value to set for the msdyn_lasterrorsreport property.
     */
    public set msdyn_lasterrorsreport(value: string | undefined) {
        this._msdyn_lasterrorsreport = value;
    };
    /**
     * Gets the msdyn_lasterrorsreport_name property value. 
     * @returns a string
     */
    public get msdyn_lasterrorsreport_name() {
        return this._msdyn_lasterrorsreport_name;
    };
    /**
     * Sets the msdyn_lasterrorsreport_name property value. 
     * @param value Value to set for the msdyn_lasterrorsreport_name property.
     */
    public set msdyn_lasterrorsreport_name(value: string | undefined) {
        this._msdyn_lasterrorsreport_name = value;
    };
    /**
     * Gets the msdyn_lastreportrefreshdate property value. 
     * @returns a Date
     */
    public get msdyn_lastreportrefreshdate() {
        return this._msdyn_lastreportrefreshdate;
    };
    /**
     * Sets the msdyn_lastreportrefreshdate property value. 
     * @param value Value to set for the msdyn_lastreportrefreshdate property.
     */
    public set msdyn_lastreportrefreshdate(value: Date | undefined) {
        this._msdyn_lastreportrefreshdate = value;
    };
    /**
     * Gets the msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask property value. 
     * @returns a msdyn_pmrecording
     */
    public get msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask() {
        return this._msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask;
    };
    /**
     * Sets the msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask property value. 
     * @param value Value to set for the msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask property.
     */
    public set msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask(value: Msdyn_pmrecording[] | undefined) {
        this._msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_outputdata property value. 
     * @returns a string
     */
    public get msdyn_outputdata() {
        return this._msdyn_outputdata;
    };
    /**
     * Sets the msdyn_outputdata property value. 
     * @param value Value to set for the msdyn_outputdata property.
     */
    public set msdyn_outputdata(value: string | undefined) {
        this._msdyn_outputdata = value;
    };
    /**
     * Gets the msdyn_pminferredtask_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_pminferredtask_AsyncOperations() {
        return this._msdyn_pminferredtask_AsyncOperations;
    };
    /**
     * Sets the msdyn_pminferredtask_AsyncOperations property value. 
     * @param value Value to set for the msdyn_pminferredtask_AsyncOperations property.
     */
    public set msdyn_pminferredtask_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_pminferredtask_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_pminferredtask_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_pminferredtask_BulkDeleteFailures() {
        return this._msdyn_pminferredtask_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_pminferredtask_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_pminferredtask_BulkDeleteFailures property.
     */
    public set msdyn_pminferredtask_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_pminferredtask_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_pminferredtask_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_pminferredtask_DuplicateBaseRecord() {
        return this._msdyn_pminferredtask_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_pminferredtask_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_pminferredtask_DuplicateBaseRecord property.
     */
    public set msdyn_pminferredtask_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_pminferredtask_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_pminferredtask_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_pminferredtask_DuplicateMatchingRecord() {
        return this._msdyn_pminferredtask_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_pminferredtask_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_pminferredtask_DuplicateMatchingRecord property.
     */
    public set msdyn_pminferredtask_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_pminferredtask_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_pminferredtask_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get msdyn_pminferredtask_FileAttachments() {
        return this._msdyn_pminferredtask_FileAttachments;
    };
    /**
     * Sets the msdyn_pminferredtask_FileAttachments property value. 
     * @param value Value to set for the msdyn_pminferredtask_FileAttachments property.
     */
    public set msdyn_pminferredtask_FileAttachments(value: Fileattachment[] | undefined) {
        this._msdyn_pminferredtask_FileAttachments = value;
    };
    /**
     * Gets the msdyn_pminferredtask_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_pminferredtask_MailboxTrackingFolders() {
        return this._msdyn_pminferredtask_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_pminferredtask_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_pminferredtask_MailboxTrackingFolders property.
     */
    public set msdyn_pminferredtask_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_pminferredtask_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_pminferredtask_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_pminferredtask_PrincipalObjectAttributeAccesses() {
        return this._msdyn_pminferredtask_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_pminferredtask_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_pminferredtask_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_pminferredtask_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_pminferredtask_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_pminferredtask_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_pminferredtask_ProcessSession() {
        return this._msdyn_pminferredtask_ProcessSession;
    };
    /**
     * Sets the msdyn_pminferredtask_ProcessSession property value. 
     * @param value Value to set for the msdyn_pminferredtask_ProcessSession property.
     */
    public set msdyn_pminferredtask_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_pminferredtask_ProcessSession = value;
    };
    /**
     * Gets the msdyn_pminferredtask_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_pminferredtask_SyncErrors() {
        return this._msdyn_pminferredtask_SyncErrors;
    };
    /**
     * Sets the msdyn_pminferredtask_SyncErrors property value. 
     * @param value Value to set for the msdyn_pminferredtask_SyncErrors property.
     */
    public set msdyn_pminferredtask_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_pminferredtask_SyncErrors = value;
    };
    /**
     * Gets the msdyn_pminferredtaskid property value. 
     * @returns a string
     */
    public get msdyn_pminferredtaskid() {
        return this._msdyn_pminferredtaskid;
    };
    /**
     * Sets the msdyn_pminferredtaskid property value. 
     * @param value Value to set for the msdyn_pminferredtaskid property.
     */
    public set msdyn_pminferredtaskid(value: string | undefined) {
        this._msdyn_pminferredtaskid = value;
    };
    /**
     * Gets the msdyn_reportdata property value. 
     * @returns a string
     */
    public get msdyn_reportdata() {
        return this._msdyn_reportdata;
    };
    /**
     * Sets the msdyn_reportdata property value. 
     * @param value Value to set for the msdyn_reportdata property.
     */
    public set msdyn_reportdata(value: string | undefined) {
        this._msdyn_reportdata = value;
    };
    /**
     * Gets the msdyn_reportprovisioningstatus property value. 
     * @returns a integer
     */
    public get msdyn_reportprovisioningstatus() {
        return this._msdyn_reportprovisioningstatus;
    };
    /**
     * Sets the msdyn_reportprovisioningstatus property value. 
     * @param value Value to set for the msdyn_reportprovisioningstatus property.
     */
    public set msdyn_reportprovisioningstatus(value: number | undefined) {
        this._msdyn_reportprovisioningstatus = value;
    };
    /**
     * Gets the msdyn_sharedrecordingmetadata property value. 
     * @returns a string
     */
    public get msdyn_sharedrecordingmetadata() {
        return this._msdyn_sharedrecordingmetadata;
    };
    /**
     * Sets the msdyn_sharedrecordingmetadata property value. 
     * @param value Value to set for the msdyn_sharedrecordingmetadata property.
     */
    public set msdyn_sharedrecordingmetadata(value: string | undefined) {
        this._msdyn_sharedrecordingmetadata = value;
    };
    /**
     * Gets the msdyn_source property value. 
     * @returns a integer
     */
    public get msdyn_source() {
        return this._msdyn_source;
    };
    /**
     * Sets the msdyn_source property value. 
     * @param value Value to set for the msdyn_source property.
     */
    public set msdyn_source(value: number | undefined) {
        this._msdyn_source = value;
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
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_automationdata", this.msdyn_automationdata);
        writer.writeNumberValue("msdyn_automationstatus", this.msdyn_automationstatus);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeStringValue("msdyn_inputdatabinding", this.msdyn_inputdatabinding);
        writer.writeBooleanValue("msdyn_isreportavailable", this.msdyn_isreportavailable);
        writer.writeStringValue("msdyn_iterationid", this.msdyn_iterationid);
        writer.writeStringValue("msdyn_lasterrors", this.msdyn_lasterrors);
        writer.writeStringValue("msdyn_lasterrorsreport", this.msdyn_lasterrorsreport);
        writer.writeStringValue("msdyn_lasterrorsreport_name", this.msdyn_lasterrorsreport_name);
        writer.writeDateValue("msdyn_lastreportrefreshdate", this.msdyn_lastreportrefreshdate);
        writer.writeCollectionOfObjectValues<Msdyn_pmrecording>("msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask", this.msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_outputdata", this.msdyn_outputdata);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_pminferredtask_AsyncOperations", this.msdyn_pminferredtask_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_pminferredtask_BulkDeleteFailures", this.msdyn_pminferredtask_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_pminferredtask_DuplicateBaseRecord", this.msdyn_pminferredtask_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_pminferredtask_DuplicateMatchingRecord", this.msdyn_pminferredtask_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Fileattachment>("msdyn_pminferredtask_FileAttachments", this.msdyn_pminferredtask_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_pminferredtask_MailboxTrackingFolders", this.msdyn_pminferredtask_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_pminferredtask_PrincipalObjectAttributeAccesses", this.msdyn_pminferredtask_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_pminferredtask_ProcessSession", this.msdyn_pminferredtask_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_pminferredtask_SyncErrors", this.msdyn_pminferredtask_SyncErrors);
        writer.writeStringValue("msdyn_pminferredtaskid", this.msdyn_pminferredtaskid);
        writer.writeStringValue("msdyn_reportdata", this.msdyn_reportdata);
        writer.writeNumberValue("msdyn_reportprovisioningstatus", this.msdyn_reportprovisioningstatus);
        writer.writeStringValue("msdyn_sharedrecordingmetadata", this.msdyn_sharedrecordingmetadata);
        writer.writeNumberValue("msdyn_source", this.msdyn_source);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
