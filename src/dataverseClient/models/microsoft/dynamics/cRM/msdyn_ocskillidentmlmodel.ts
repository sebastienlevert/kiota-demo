import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_aimodelFromDiscriminatorValue} from './createMsdyn_aimodelFromDiscriminatorValue';
import {createMsdyn_ocsimltrainingFromDiscriminatorValue} from './createMsdyn_ocsimltrainingFromDiscriminatorValue';
import {createMsdyn_ocsitdimportconfigFromDiscriminatorValue} from './createMsdyn_ocsitdimportconfigFromDiscriminatorValue';
import {createMsdyn_ocsitrainingdataFromDiscriminatorValue} from './createMsdyn_ocsitrainingdataFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_aimodel, Msdyn_ocsimltraining, Msdyn_ocsitdimportconfig, Msdyn_ocsitrainingdata, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocskillidentmlmodel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_aimodelid_value?: string | undefined;
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
    private _msdyn_aimodelid?: Msdyn_aimodel | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocsimltraining_ocskillidentmlmodeli?: Msdyn_ocsimltraining[] | undefined;
    private _msdyn_ocsitdimportconfig_ocskillidentmlmo?: Msdyn_ocsitdimportconfig[] | undefined;
    private _msdyn_ocsitrainingdata_ocskillidentmlmode?: Msdyn_ocsitrainingdata[] | undefined;
    private _msdyn_ocskillidentmlmodel_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocskillidentmlmodel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocskillidentmlmodel_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocskillidentmlmodel_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocskillidentmlmodel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocskillidentmlmodel_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocskillidentmlmodel_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocskillidentmlmodelid?: string | undefined;
    private _msdyn_ocskillidentmlmodelstatus?: number | undefined;
    private _msdyn_ocskillidentmlmodeltrainingstatus?: number | undefined;
    private _msdyn_trainingconfiguration?: string | undefined;
    private _msdyn_uniquename?: string | undefined;
    private _msdyn_wizzarddata?: string | undefined;
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
     * Gets the _msdyn_aimodelid_value property value. 
     * @returns a string
     */
    public get _msdyn_aimodelid_value() {
        return this.__msdyn_aimodelid_value;
    };
    /**
     * Sets the _msdyn_aimodelid_value property value. 
     * @param value Value to set for the _msdyn_aimodelid_value property.
     */
    public set _msdyn_aimodelid_value(value: string | undefined) {
        this.__msdyn_aimodelid_value = value;
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
     * Instantiates a new msdyn_ocskillidentmlmodel and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_aimodelid_value": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel)._msdyn_aimodelid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel)._owninguser_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_aimodelid": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_aimodelid = n.getObjectValue<Msdyn_aimodel>(createMsdyn_aimodelFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_name = n.getStringValue(); },
            "msdyn_ocsimltraining_ocskillidentmlmodeli": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocsimltraining_ocskillidentmlmodeli = n.getCollectionOfObjectValues<Msdyn_ocsimltraining>(createMsdyn_ocsimltrainingFromDiscriminatorValue); },
            "msdyn_ocsitdimportconfig_ocskillidentmlmo": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocsitdimportconfig_ocskillidentmlmo = n.getCollectionOfObjectValues<Msdyn_ocsitdimportconfig>(createMsdyn_ocsitdimportconfigFromDiscriminatorValue); },
            "msdyn_ocsitrainingdata_ocskillidentmlmode": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocsitrainingdata_ocskillidentmlmode = n.getCollectionOfObjectValues<Msdyn_ocsitrainingdata>(createMsdyn_ocsitrainingdataFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodel_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodel_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodel_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodel_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodel_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodel_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodel_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodel_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodel_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodel_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocskillidentmlmodelid": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodelid = n.getStringValue(); },
            "msdyn_ocskillidentmlmodelstatus": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodelstatus = n.getNumberValue(); },
            "msdyn_ocskillidentmlmodeltrainingstatus": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_ocskillidentmlmodeltrainingstatus = n.getNumberValue(); },
            "msdyn_trainingconfiguration": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_trainingconfiguration = n.getStringValue(); },
            "msdyn_uniquename": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_uniquename = n.getStringValue(); },
            "msdyn_wizzarddata": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).msdyn_wizzarddata = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocskillidentmlmodel).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_aimodelid property value. 
     * @returns a msdyn_aimodel
     */
    public get msdyn_aimodelid() {
        return this._msdyn_aimodelid;
    };
    /**
     * Sets the msdyn_aimodelid property value. 
     * @param value Value to set for the msdyn_aimodelid property.
     */
    public set msdyn_aimodelid(value: Msdyn_aimodel | undefined) {
        this._msdyn_aimodelid = value;
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
     * Gets the msdyn_ocsimltraining_ocskillidentmlmodeli property value. 
     * @returns a msdyn_ocsimltraining
     */
    public get msdyn_ocsimltraining_ocskillidentmlmodeli() {
        return this._msdyn_ocsimltraining_ocskillidentmlmodeli;
    };
    /**
     * Sets the msdyn_ocsimltraining_ocskillidentmlmodeli property value. 
     * @param value Value to set for the msdyn_ocsimltraining_ocskillidentmlmodeli property.
     */
    public set msdyn_ocsimltraining_ocskillidentmlmodeli(value: Msdyn_ocsimltraining[] | undefined) {
        this._msdyn_ocsimltraining_ocskillidentmlmodeli = value;
    };
    /**
     * Gets the msdyn_ocsitdimportconfig_ocskillidentmlmo property value. 
     * @returns a msdyn_ocsitdimportconfig
     */
    public get msdyn_ocsitdimportconfig_ocskillidentmlmo() {
        return this._msdyn_ocsitdimportconfig_ocskillidentmlmo;
    };
    /**
     * Sets the msdyn_ocsitdimportconfig_ocskillidentmlmo property value. 
     * @param value Value to set for the msdyn_ocsitdimportconfig_ocskillidentmlmo property.
     */
    public set msdyn_ocsitdimportconfig_ocskillidentmlmo(value: Msdyn_ocsitdimportconfig[] | undefined) {
        this._msdyn_ocsitdimportconfig_ocskillidentmlmo = value;
    };
    /**
     * Gets the msdyn_ocsitrainingdata_ocskillidentmlmode property value. 
     * @returns a msdyn_ocsitrainingdata
     */
    public get msdyn_ocsitrainingdata_ocskillidentmlmode() {
        return this._msdyn_ocsitrainingdata_ocskillidentmlmode;
    };
    /**
     * Sets the msdyn_ocsitrainingdata_ocskillidentmlmode property value. 
     * @param value Value to set for the msdyn_ocsitrainingdata_ocskillidentmlmode property.
     */
    public set msdyn_ocsitrainingdata_ocskillidentmlmode(value: Msdyn_ocsitrainingdata[] | undefined) {
        this._msdyn_ocsitrainingdata_ocskillidentmlmode = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocskillidentmlmodel_AsyncOperations() {
        return this._msdyn_ocskillidentmlmodel_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodel_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodel_AsyncOperations property.
     */
    public set msdyn_ocskillidentmlmodel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocskillidentmlmodel_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocskillidentmlmodel_BulkDeleteFailures() {
        return this._msdyn_ocskillidentmlmodel_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodel_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodel_BulkDeleteFailures property.
     */
    public set msdyn_ocskillidentmlmodel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocskillidentmlmodel_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodel_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocskillidentmlmodel_DuplicateBaseRecord() {
        return this._msdyn_ocskillidentmlmodel_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodel_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodel_DuplicateBaseRecord property.
     */
    public set msdyn_ocskillidentmlmodel_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocskillidentmlmodel_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodel_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocskillidentmlmodel_DuplicateMatchingRecord() {
        return this._msdyn_ocskillidentmlmodel_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodel_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodel_DuplicateMatchingRecord property.
     */
    public set msdyn_ocskillidentmlmodel_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocskillidentmlmodel_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocskillidentmlmodel_MailboxTrackingFolders() {
        return this._msdyn_ocskillidentmlmodel_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodel_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodel_MailboxTrackingFolders property.
     */
    public set msdyn_ocskillidentmlmodel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocskillidentmlmodel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodel_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocskillidentmlmodel_ProcessSession() {
        return this._msdyn_ocskillidentmlmodel_ProcessSession;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodel_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodel_ProcessSession property.
     */
    public set msdyn_ocskillidentmlmodel_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocskillidentmlmodel_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocskillidentmlmodel_SyncErrors() {
        return this._msdyn_ocskillidentmlmodel_SyncErrors;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodel_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodel_SyncErrors property.
     */
    public set msdyn_ocskillidentmlmodel_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocskillidentmlmodel_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodelid property value. 
     * @returns a string
     */
    public get msdyn_ocskillidentmlmodelid() {
        return this._msdyn_ocskillidentmlmodelid;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodelid property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodelid property.
     */
    public set msdyn_ocskillidentmlmodelid(value: string | undefined) {
        this._msdyn_ocskillidentmlmodelid = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodelstatus property value. 
     * @returns a integer
     */
    public get msdyn_ocskillidentmlmodelstatus() {
        return this._msdyn_ocskillidentmlmodelstatus;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodelstatus property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodelstatus property.
     */
    public set msdyn_ocskillidentmlmodelstatus(value: number | undefined) {
        this._msdyn_ocskillidentmlmodelstatus = value;
    };
    /**
     * Gets the msdyn_ocskillidentmlmodeltrainingstatus property value. 
     * @returns a integer
     */
    public get msdyn_ocskillidentmlmodeltrainingstatus() {
        return this._msdyn_ocskillidentmlmodeltrainingstatus;
    };
    /**
     * Sets the msdyn_ocskillidentmlmodeltrainingstatus property value. 
     * @param value Value to set for the msdyn_ocskillidentmlmodeltrainingstatus property.
     */
    public set msdyn_ocskillidentmlmodeltrainingstatus(value: number | undefined) {
        this._msdyn_ocskillidentmlmodeltrainingstatus = value;
    };
    /**
     * Gets the msdyn_trainingconfiguration property value. 
     * @returns a string
     */
    public get msdyn_trainingconfiguration() {
        return this._msdyn_trainingconfiguration;
    };
    /**
     * Sets the msdyn_trainingconfiguration property value. 
     * @param value Value to set for the msdyn_trainingconfiguration property.
     */
    public set msdyn_trainingconfiguration(value: string | undefined) {
        this._msdyn_trainingconfiguration = value;
    };
    /**
     * Gets the msdyn_uniquename property value. 
     * @returns a string
     */
    public get msdyn_uniquename() {
        return this._msdyn_uniquename;
    };
    /**
     * Sets the msdyn_uniquename property value. 
     * @param value Value to set for the msdyn_uniquename property.
     */
    public set msdyn_uniquename(value: string | undefined) {
        this._msdyn_uniquename = value;
    };
    /**
     * Gets the msdyn_wizzarddata property value. 
     * @returns a string
     */
    public get msdyn_wizzarddata() {
        return this._msdyn_wizzarddata;
    };
    /**
     * Sets the msdyn_wizzarddata property value. 
     * @param value Value to set for the msdyn_wizzarddata property.
     */
    public set msdyn_wizzarddata(value: string | undefined) {
        this._msdyn_wizzarddata = value;
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
        writer.writeStringValue("_msdyn_aimodelid_value", this._msdyn_aimodelid_value);
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
        writer.writeObjectValue<Msdyn_aimodel>("msdyn_aimodelid", this.msdyn_aimodelid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Msdyn_ocsimltraining>("msdyn_ocsimltraining_ocskillidentmlmodeli", this.msdyn_ocsimltraining_ocskillidentmlmodeli);
        writer.writeCollectionOfObjectValues<Msdyn_ocsitdimportconfig>("msdyn_ocsitdimportconfig_ocskillidentmlmo", this.msdyn_ocsitdimportconfig_ocskillidentmlmo);
        writer.writeCollectionOfObjectValues<Msdyn_ocsitrainingdata>("msdyn_ocsitrainingdata_ocskillidentmlmode", this.msdyn_ocsitrainingdata_ocskillidentmlmode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocskillidentmlmodel_AsyncOperations", this.msdyn_ocskillidentmlmodel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocskillidentmlmodel_BulkDeleteFailures", this.msdyn_ocskillidentmlmodel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocskillidentmlmodel_DuplicateBaseRecord", this.msdyn_ocskillidentmlmodel_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocskillidentmlmodel_DuplicateMatchingRecord", this.msdyn_ocskillidentmlmodel_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocskillidentmlmodel_MailboxTrackingFolders", this.msdyn_ocskillidentmlmodel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses", this.msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocskillidentmlmodel_ProcessSession", this.msdyn_ocskillidentmlmodel_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocskillidentmlmodel_SyncErrors", this.msdyn_ocskillidentmlmodel_SyncErrors);
        writer.writeStringValue("msdyn_ocskillidentmlmodelid", this.msdyn_ocskillidentmlmodelid);
        writer.writeNumberValue("msdyn_ocskillidentmlmodelstatus", this.msdyn_ocskillidentmlmodelstatus);
        writer.writeNumberValue("msdyn_ocskillidentmlmodeltrainingstatus", this.msdyn_ocskillidentmlmodeltrainingstatus);
        writer.writeStringValue("msdyn_trainingconfiguration", this.msdyn_trainingconfiguration);
        writer.writeStringValue("msdyn_uniquename", this.msdyn_uniquename);
        writer.writeStringValue("msdyn_wizzarddata", this.msdyn_wizzarddata);
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
