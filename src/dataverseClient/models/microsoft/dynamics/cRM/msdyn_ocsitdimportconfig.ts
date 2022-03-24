import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_ocsitrainingdataFromDiscriminatorValue} from './createMsdyn_ocsitrainingdataFromDiscriminatorValue';
import {createMsdyn_ocskillidentmlmodelFromDiscriminatorValue} from './createMsdyn_ocskillidentmlmodelFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_ocsitrainingdata, Msdyn_ocskillidentmlmodel, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocsitdimportconfig extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_ocskillidentmlmodelid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_cdsdataloadconfig?: string | undefined;
    private _msdyn_importconfigtype?: number | undefined;
    private _msdyn_loadstatus?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocsitdimportconfig_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocsitdimportconfig_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocsitdimportconfig_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocsitdimportconfig_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocsitdimportconfig_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocsitdimportconfig_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocsitdimportconfig_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocsitdimportconfigid?: string | undefined;
    private _msdyn_ocsitrainingdata_ocsitdimportconfig?: Msdyn_ocsitrainingdata[] | undefined;
    private _msdyn_ocskillidentmlmodelid?: Msdyn_ocskillidentmlmodel | undefined;
    private _msdyn_recordsimported?: number | undefined;
    private _msdyn_recordsskipped?: number | undefined;
    private _msdyn_totalrecordstoimport?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_ocskillidentmlmodelid_value property value. 
     * @returns a string
     */
    public get _msdyn_ocskillidentmlmodelid_value() {
        return this.__msdyn_ocskillidentmlmodelid_value;
    };
    /**
     * Sets the _msdyn_ocskillidentmlmodelid_value property value. 
     * @param value Value to set for the _msdyn_ocskillidentmlmodelid_value property.
     */
    public set _msdyn_ocskillidentmlmodelid_value(value: string | undefined) {
        this.__msdyn_ocskillidentmlmodelid_value = value;
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
     * Instantiates a new msdyn_ocsitdimportconfig and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_ocskillidentmlmodelid_value": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig)._msdyn_ocskillidentmlmodelid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_cdsdataloadconfig": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_cdsdataloadconfig = n.getStringValue(); },
            "msdyn_importconfigtype": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_importconfigtype = n.getNumberValue(); },
            "msdyn_loadstatus": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_loadstatus = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_name = n.getStringValue(); },
            "msdyn_ocsitdimportconfig_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitdimportconfig_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocsitdimportconfig_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitdimportconfig_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocsitdimportconfig_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitdimportconfig_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocsitdimportconfig_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitdimportconfig_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocsitdimportconfig_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitdimportconfig_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocsitdimportconfig_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitdimportconfig_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocsitdimportconfig_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitdimportconfig_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocsitdimportconfigid": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitdimportconfigid = n.getStringValue(); },
            "msdyn_ocsitrainingdata_ocsitdimportconfig": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocsitrainingdata_ocsitdimportconfig = n.getCollectionOfObjectValues<Msdyn_ocsitrainingdata>(createMsdyn_ocsitrainingdataFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodelid": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_ocskillidentmlmodelid = n.getObjectValue<Msdyn_ocskillidentmlmodel>(createMsdyn_ocskillidentmlmodelFromDiscriminatorValue); },
            "msdyn_recordsimported": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_recordsimported = n.getNumberValue(); },
            "msdyn_recordsskipped": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_recordsskipped = n.getNumberValue(); },
            "msdyn_totalrecordstoimport": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).msdyn_totalrecordstoimport = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocsitdimportconfig).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_cdsdataloadconfig property value. 
     * @returns a string
     */
    public get msdyn_cdsdataloadconfig() {
        return this._msdyn_cdsdataloadconfig;
    };
    /**
     * Sets the msdyn_cdsdataloadconfig property value. 
     * @param value Value to set for the msdyn_cdsdataloadconfig property.
     */
    public set msdyn_cdsdataloadconfig(value: string | undefined) {
        this._msdyn_cdsdataloadconfig = value;
    };
    /**
     * Gets the msdyn_importconfigtype property value. 
     * @returns a integer
     */
    public get msdyn_importconfigtype() {
        return this._msdyn_importconfigtype;
    };
    /**
     * Sets the msdyn_importconfigtype property value. 
     * @param value Value to set for the msdyn_importconfigtype property.
     */
    public set msdyn_importconfigtype(value: number | undefined) {
        this._msdyn_importconfigtype = value;
    };
    /**
     * Gets the msdyn_loadstatus property value. 
     * @returns a integer
     */
    public get msdyn_loadstatus() {
        return this._msdyn_loadstatus;
    };
    /**
     * Sets the msdyn_loadstatus property value. 
     * @param value Value to set for the msdyn_loadstatus property.
     */
    public set msdyn_loadstatus(value: number | undefined) {
        this._msdyn_loadstatus = value;
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
     * Gets the msdyn_ocsitdimportconfig_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocsitdimportconfig_AsyncOperations() {
        return this._msdyn_ocsitdimportconfig_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocsitdimportconfig_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfig_AsyncOperations property.
     */
    public set msdyn_ocsitdimportconfig_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocsitdimportconfig_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocsitdimportconfig_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocsitdimportconfig_BulkDeleteFailures() {
        return this._msdyn_ocsitdimportconfig_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocsitdimportconfig_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfig_BulkDeleteFailures property.
     */
    public set msdyn_ocsitdimportconfig_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocsitdimportconfig_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocsitdimportconfig_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocsitdimportconfig_DuplicateBaseRecord() {
        return this._msdyn_ocsitdimportconfig_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocsitdimportconfig_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfig_DuplicateBaseRecord property.
     */
    public set msdyn_ocsitdimportconfig_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocsitdimportconfig_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocsitdimportconfig_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocsitdimportconfig_DuplicateMatchingRecord() {
        return this._msdyn_ocsitdimportconfig_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocsitdimportconfig_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfig_DuplicateMatchingRecord property.
     */
    public set msdyn_ocsitdimportconfig_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocsitdimportconfig_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocsitdimportconfig_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocsitdimportconfig_MailboxTrackingFolders() {
        return this._msdyn_ocsitdimportconfig_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocsitdimportconfig_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfig_MailboxTrackingFolders property.
     */
    public set msdyn_ocsitdimportconfig_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocsitdimportconfig_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocsitdimportconfig_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocsitdimportconfig_ProcessSession() {
        return this._msdyn_ocsitdimportconfig_ProcessSession;
    };
    /**
     * Sets the msdyn_ocsitdimportconfig_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfig_ProcessSession property.
     */
    public set msdyn_ocsitdimportconfig_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocsitdimportconfig_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocsitdimportconfig_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocsitdimportconfig_SyncErrors() {
        return this._msdyn_ocsitdimportconfig_SyncErrors;
    };
    /**
     * Sets the msdyn_ocsitdimportconfig_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfig_SyncErrors property.
     */
    public set msdyn_ocsitdimportconfig_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocsitdimportconfig_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocsitdimportconfigid property value. 
     * @returns a string
     */
    public get msdyn_ocsitdimportconfigid() {
        return this._msdyn_ocsitdimportconfigid;
    };
    /**
     * Sets the msdyn_ocsitdimportconfigid property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfigid property.
     */
    public set msdyn_ocsitdimportconfigid(value: string | undefined) {
        this._msdyn_ocsitdimportconfigid = value;
    };
    /**
     * Gets the msdyn_ocsitrainingdata_ocsitdimportconfig property value. 
     * @returns a msdyn_ocsitrainingdata
     */
    public get msdyn_ocsitrainingdata_ocsitdimportconfig() {
        return this._msdyn_ocsitrainingdata_ocsitdimportconfig;
    };
    /**
     * Sets the msdyn_ocsitrainingdata_ocsitdimportconfig property value. 
     * @param value Value to set for the msdyn_ocsitrainingdata_ocsitdimportconfig property.
     */
    public set msdyn_ocsitrainingdata_ocsitdimportconfig(value: Msdyn_ocsitrainingdata[] | undefined) {
        this._msdyn_ocsitrainingdata_ocsitdimportconfig = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodelid property value. 
     * @returns a msdyn_ocskillidentmlmodel
     */
    public get msdyn_ocskillidentmlmodelid() {
        return this._msdyn_ocskillidentmlmodelid;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodelid property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodelid property.
     */
    public set msdyn_ocskillidentmlmodelid(value: Msdyn_ocskillidentmlmodel | undefined) {
        this._msdyn_ocskillidentmlmodelid = value;
    };
    /**
     * Gets the msdyn_recordsimported property value. 
     * @returns a integer
     */
    public get msdyn_recordsimported() {
        return this._msdyn_recordsimported;
    };
    /**
     * Sets the msdyn_recordsimported property value. 
     * @param value Value to set for the msdyn_recordsimported property.
     */
    public set msdyn_recordsimported(value: number | undefined) {
        this._msdyn_recordsimported = value;
    };
    /**
     * Gets the msdyn_recordsskipped property value. 
     * @returns a integer
     */
    public get msdyn_recordsskipped() {
        return this._msdyn_recordsskipped;
    };
    /**
     * Sets the msdyn_recordsskipped property value. 
     * @param value Value to set for the msdyn_recordsskipped property.
     */
    public set msdyn_recordsskipped(value: number | undefined) {
        this._msdyn_recordsskipped = value;
    };
    /**
     * Gets the msdyn_totalrecordstoimport property value. 
     * @returns a integer
     */
    public get msdyn_totalrecordstoimport() {
        return this._msdyn_totalrecordstoimport;
    };
    /**
     * Sets the msdyn_totalrecordstoimport property value. 
     * @param value Value to set for the msdyn_totalrecordstoimport property.
     */
    public set msdyn_totalrecordstoimport(value: number | undefined) {
        this._msdyn_totalrecordstoimport = value;
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
        writer.writeStringValue("_msdyn_ocskillidentmlmodelid_value", this._msdyn_ocskillidentmlmodelid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_cdsdataloadconfig", this.msdyn_cdsdataloadconfig);
        writer.writeNumberValue("msdyn_importconfigtype", this.msdyn_importconfigtype);
        writer.writeNumberValue("msdyn_loadstatus", this.msdyn_loadstatus);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocsitdimportconfig_AsyncOperations", this.msdyn_ocsitdimportconfig_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocsitdimportconfig_BulkDeleteFailures", this.msdyn_ocsitdimportconfig_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocsitdimportconfig_DuplicateBaseRecord", this.msdyn_ocsitdimportconfig_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocsitdimportconfig_DuplicateMatchingRecord", this.msdyn_ocsitdimportconfig_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocsitdimportconfig_MailboxTrackingFolders", this.msdyn_ocsitdimportconfig_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses", this.msdyn_ocsitdimportconfig_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocsitdimportconfig_ProcessSession", this.msdyn_ocsitdimportconfig_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocsitdimportconfig_SyncErrors", this.msdyn_ocsitdimportconfig_SyncErrors);
        writer.writeStringValue("msdyn_ocsitdimportconfigid", this.msdyn_ocsitdimportconfigid);
        writer.writeCollectionOfObjectValues<Msdyn_ocsitrainingdata>("msdyn_ocsitrainingdata_ocsitdimportconfig", this.msdyn_ocsitrainingdata_ocsitdimportconfig);
        writer.writeObjectValue<Msdyn_ocskillidentmlmodel>("msdyn_ocskillidentmlmodelid", this.msdyn_ocskillidentmlmodelid);
        writer.writeNumberValue("msdyn_recordsimported", this.msdyn_recordsimported);
        writer.writeNumberValue("msdyn_recordsskipped", this.msdyn_recordsskipped);
        writer.writeNumberValue("msdyn_totalrecordstoimport", this.msdyn_totalrecordstoimport);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
