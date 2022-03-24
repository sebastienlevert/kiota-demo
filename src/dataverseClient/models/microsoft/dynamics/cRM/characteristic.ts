import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecharacteristicFromDiscriminatorValue} from './createBookableresourcecharacteristicFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_characteristicreqforteammemberFromDiscriminatorValue} from './createMsdyn_characteristicreqforteammemberFromDiscriminatorValue';
import {createMsdyn_incidenttypecharacteristicFromDiscriminatorValue} from './createMsdyn_incidenttypecharacteristicFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue} from './createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue';
import {createMsdyn_ocsitdskillFromDiscriminatorValue} from './createMsdyn_ocsitdskillFromDiscriminatorValue';
import {createMsdyn_requirementcharacteristicFromDiscriminatorValue} from './createMsdyn_requirementcharacteristicFromDiscriminatorValue';
import {createMsdyn_rolecompetencyrequirementFromDiscriminatorValue} from './createMsdyn_rolecompetencyrequirementFromDiscriminatorValue';
import {createMsdyn_rulesetdependencymappingFromDiscriminatorValue} from './createMsdyn_rulesetdependencymappingFromDiscriminatorValue';
import {createMsdyn_skillattachmenttargetFromDiscriminatorValue} from './createMsdyn_skillattachmenttargetFromDiscriminatorValue';
import {createMsdyn_workordercharacteristicFromDiscriminatorValue} from './createMsdyn_workordercharacteristicFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bookableresourcecharacteristic, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_characteristicreqforteammember, Msdyn_incidenttypecharacteristic, Msdyn_ocliveworkitemcharacteristic, Msdyn_ocsitdskill, Msdyn_requirementcharacteristic, Msdyn_rolecompetencyrequirement, Msdyn_rulesetdependencymapping, Msdyn_skillattachmenttarget, Msdyn_workordercharacteristic, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Characteristic extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _characteristic_AsyncOperations?: Asyncoperation[] | undefined;
    private _characteristic_bookableresourcecharacteristic_Characteristic?: Bookableresourcecharacteristic[] | undefined;
    private _characteristic_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _characteristic_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _characteristic_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _characteristic_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _characteristic_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _characteristic_ProcessSession?: Processsession[] | undefined;
    private _characteristic_SyncErrors?: Syncerror[] | undefined;
    private _characteristicid?: string | undefined;
    private _characteristictype?: number | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic?: Msdyn_characteristicreqforteammember[] | undefined;
    private _msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic?: Msdyn_incidenttypecharacteristic[] | undefined;
    private _msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic?: Msdyn_ocliveworkitemcharacteristic[] | undefined;
    private _msdyn_characteristic_msdyn_requirementcharacteristic_characteristic?: Msdyn_requirementcharacteristic[] | undefined;
    private _msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic?: Msdyn_rolecompetencyrequirement[] | undefined;
    private _msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: Msdyn_rulesetdependencymapping[] | undefined;
    private _msdyn_characteristic_msdyn_workordercharacteristic_Characteristic?: Msdyn_workordercharacteristic[] | undefined;
    private _msdyn_characteristic_skillattachmenttarget?: Msdyn_skillattachmenttarget[] | undefined;
    private _msdyn_ocsitdskill_skillid_Characteristic?: Msdyn_ocsitdskill[] | undefined;
    private _msdyn_requireapproval?: boolean | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the characteristic_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get characteristic_AsyncOperations() {
        return this._characteristic_AsyncOperations;
    };
    /**
     * Sets the characteristic_AsyncOperations property value. 
     * @param value Value to set for the characteristic_AsyncOperations property.
     */
    public set characteristic_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._characteristic_AsyncOperations = value;
    };
    /**
     * Gets the characteristic_bookableresourcecharacteristic_Characteristic property value. 
     * @returns a bookableresourcecharacteristic
     */
    public get characteristic_bookableresourcecharacteristic_Characteristic() {
        return this._characteristic_bookableresourcecharacteristic_Characteristic;
    };
    /**
     * Sets the characteristic_bookableresourcecharacteristic_Characteristic property value. 
     * @param value Value to set for the characteristic_bookableresourcecharacteristic_Characteristic property.
     */
    public set characteristic_bookableresourcecharacteristic_Characteristic(value: Bookableresourcecharacteristic[] | undefined) {
        this._characteristic_bookableresourcecharacteristic_Characteristic = value;
    };
    /**
     * Gets the characteristic_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get characteristic_BulkDeleteFailures() {
        return this._characteristic_BulkDeleteFailures;
    };
    /**
     * Sets the characteristic_BulkDeleteFailures property value. 
     * @param value Value to set for the characteristic_BulkDeleteFailures property.
     */
    public set characteristic_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._characteristic_BulkDeleteFailures = value;
    };
    /**
     * Gets the characteristic_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get characteristic_DuplicateBaseRecord() {
        return this._characteristic_DuplicateBaseRecord;
    };
    /**
     * Sets the characteristic_DuplicateBaseRecord property value. 
     * @param value Value to set for the characteristic_DuplicateBaseRecord property.
     */
    public set characteristic_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._characteristic_DuplicateBaseRecord = value;
    };
    /**
     * Gets the characteristic_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get characteristic_DuplicateMatchingRecord() {
        return this._characteristic_DuplicateMatchingRecord;
    };
    /**
     * Sets the characteristic_DuplicateMatchingRecord property value. 
     * @param value Value to set for the characteristic_DuplicateMatchingRecord property.
     */
    public set characteristic_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._characteristic_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the characteristic_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get characteristic_MailboxTrackingFolders() {
        return this._characteristic_MailboxTrackingFolders;
    };
    /**
     * Sets the characteristic_MailboxTrackingFolders property value. 
     * @param value Value to set for the characteristic_MailboxTrackingFolders property.
     */
    public set characteristic_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._characteristic_MailboxTrackingFolders = value;
    };
    /**
     * Gets the characteristic_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get characteristic_PrincipalObjectAttributeAccesses() {
        return this._characteristic_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the characteristic_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the characteristic_PrincipalObjectAttributeAccesses property.
     */
    public set characteristic_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._characteristic_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the characteristic_ProcessSession property value. 
     * @returns a processsession
     */
    public get characteristic_ProcessSession() {
        return this._characteristic_ProcessSession;
    };
    /**
     * Sets the characteristic_ProcessSession property value. 
     * @param value Value to set for the characteristic_ProcessSession property.
     */
    public set characteristic_ProcessSession(value: Processsession[] | undefined) {
        this._characteristic_ProcessSession = value;
    };
    /**
     * Gets the characteristic_SyncErrors property value. 
     * @returns a syncerror
     */
    public get characteristic_SyncErrors() {
        return this._characteristic_SyncErrors;
    };
    /**
     * Sets the characteristic_SyncErrors property value. 
     * @param value Value to set for the Characteristic_SyncErrors property.
     */
    public set characteristic_SyncErrors(value: Syncerror[] | undefined) {
        this._characteristic_SyncErrors = value;
    };
    /**
     * Gets the characteristicid property value. 
     * @returns a string
     */
    public get characteristicid() {
        return this._characteristicid;
    };
    /**
     * Sets the characteristicid property value. 
     * @param value Value to set for the characteristicid property.
     */
    public set characteristicid(value: string | undefined) {
        this._characteristicid = value;
    };
    /**
     * Gets the characteristictype property value. 
     * @returns a integer
     */
    public get characteristictype() {
        return this._characteristictype;
    };
    /**
     * Sets the characteristictype property value. 
     * @param value Value to set for the characteristictype property.
     */
    public set characteristictype(value: number | undefined) {
        this._characteristictype = value;
    };
    /**
     * Instantiates a new characteristic and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
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
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Characteristic)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Characteristic)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Characteristic)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Characteristic)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Characteristic)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Characteristic)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Characteristic)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Characteristic)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Characteristic)._transactioncurrencyid_value = n.getStringValue(); },
            "characteristic_AsyncOperations": (o, n) => { (o as unknown as Characteristic).characteristic_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "characteristic_bookableresourcecharacteristic_Characteristic": (o, n) => { (o as unknown as Characteristic).characteristic_bookableresourcecharacteristic_Characteristic = n.getCollectionOfObjectValues<Bookableresourcecharacteristic>(createBookableresourcecharacteristicFromDiscriminatorValue); },
            "characteristic_BulkDeleteFailures": (o, n) => { (o as unknown as Characteristic).characteristic_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "characteristic_DuplicateBaseRecord": (o, n) => { (o as unknown as Characteristic).characteristic_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "characteristic_DuplicateMatchingRecord": (o, n) => { (o as unknown as Characteristic).characteristic_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "characteristic_MailboxTrackingFolders": (o, n) => { (o as unknown as Characteristic).characteristic_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "characteristic_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Characteristic).characteristic_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "characteristic_ProcessSession": (o, n) => { (o as unknown as Characteristic).characteristic_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "characteristic_SyncErrors": (o, n) => { (o as unknown as Characteristic).characteristic_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "characteristicid": (o, n) => { (o as unknown as Characteristic).characteristicid = n.getStringValue(); },
            "characteristictype": (o, n) => { (o as unknown as Characteristic).characteristictype = n.getNumberValue(); },
            "createdbyname": (o, n) => { (o as unknown as Characteristic).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Characteristic).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Characteristic).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Characteristic).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Characteristic).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Characteristic).importsequencenumber = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Characteristic).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Characteristic).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Characteristic).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic": (o, n) => { (o as unknown as Characteristic).msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic = n.getCollectionOfObjectValues<Msdyn_characteristicreqforteammember>(createMsdyn_characteristicreqforteammemberFromDiscriminatorValue); },
            "msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic": (o, n) => { (o as unknown as Characteristic).msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic = n.getCollectionOfObjectValues<Msdyn_incidenttypecharacteristic>(createMsdyn_incidenttypecharacteristicFromDiscriminatorValue); },
            "msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic": (o, n) => { (o as unknown as Characteristic).msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic = n.getCollectionOfObjectValues<Msdyn_ocliveworkitemcharacteristic>(createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue); },
            "msdyn_characteristic_msdyn_requirementcharacteristic_characteristic": (o, n) => { (o as unknown as Characteristic).msdyn_characteristic_msdyn_requirementcharacteristic_characteristic = n.getCollectionOfObjectValues<Msdyn_requirementcharacteristic>(createMsdyn_requirementcharacteristicFromDiscriminatorValue); },
            "msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic": (o, n) => { (o as unknown as Characteristic).msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic = n.getCollectionOfObjectValues<Msdyn_rolecompetencyrequirement>(createMsdyn_rolecompetencyrequirementFromDiscriminatorValue); },
            "msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid": (o, n) => { (o as unknown as Characteristic).msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = n.getCollectionOfObjectValues<Msdyn_rulesetdependencymapping>(createMsdyn_rulesetdependencymappingFromDiscriminatorValue); },
            "msdyn_characteristic_msdyn_workordercharacteristic_Characteristic": (o, n) => { (o as unknown as Characteristic).msdyn_characteristic_msdyn_workordercharacteristic_Characteristic = n.getCollectionOfObjectValues<Msdyn_workordercharacteristic>(createMsdyn_workordercharacteristicFromDiscriminatorValue); },
            "msdyn_characteristic_skillattachmenttarget": (o, n) => { (o as unknown as Characteristic).msdyn_characteristic_skillattachmenttarget = n.getCollectionOfObjectValues<Msdyn_skillattachmenttarget>(createMsdyn_skillattachmenttargetFromDiscriminatorValue); },
            "msdyn_ocsitdskill_skillid_Characteristic": (o, n) => { (o as unknown as Characteristic).msdyn_ocsitdskill_skillid_Characteristic = n.getCollectionOfObjectValues<Msdyn_ocsitdskill>(createMsdyn_ocsitdskillFromDiscriminatorValue); },
            "msdyn_requireapproval": (o, n) => { (o as unknown as Characteristic).msdyn_requireapproval = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Characteristic).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Characteristic).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Characteristic).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Characteristic).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Characteristic).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Characteristic).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Characteristic).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Characteristic).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Characteristic).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Characteristic).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Characteristic).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Characteristic).versionnumber = n.getNumberValue(); },
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
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
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
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
    };
    /**
     * Gets the msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic property value. 
     * @returns a msdyn_characteristicreqforteammember
     */
    public get msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic() {
        return this._msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic;
    };
    /**
     * Sets the msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic property value. 
     * @param value Value to set for the msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic property.
     */
    public set msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic(value: Msdyn_characteristicreqforteammember[] | undefined) {
        this._msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic = value;
    };
    /**
     * Gets the msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic property value. 
     * @returns a msdyn_incidenttypecharacteristic
     */
    public get msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic() {
        return this._msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic;
    };
    /**
     * Sets the msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic property value. 
     * @param value Value to set for the msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic property.
     */
    public set msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic(value: Msdyn_incidenttypecharacteristic[] | undefined) {
        this._msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic = value;
    };
    /**
     * Gets the msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic property value. 
     * @returns a msdyn_ocliveworkitemcharacteristic
     */
    public get msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic() {
        return this._msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic;
    };
    /**
     * Sets the msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic property value. 
     * @param value Value to set for the msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic property.
     */
    public set msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic(value: Msdyn_ocliveworkitemcharacteristic[] | undefined) {
        this._msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic = value;
    };
    /**
     * Gets the msdyn_characteristic_msdyn_requirementcharacteristic_characteristic property value. 
     * @returns a msdyn_requirementcharacteristic
     */
    public get msdyn_characteristic_msdyn_requirementcharacteristic_characteristic() {
        return this._msdyn_characteristic_msdyn_requirementcharacteristic_characteristic;
    };
    /**
     * Sets the msdyn_characteristic_msdyn_requirementcharacteristic_characteristic property value. 
     * @param value Value to set for the msdyn_characteristic_msdyn_requirementcharacteristic_characteristic property.
     */
    public set msdyn_characteristic_msdyn_requirementcharacteristic_characteristic(value: Msdyn_requirementcharacteristic[] | undefined) {
        this._msdyn_characteristic_msdyn_requirementcharacteristic_characteristic = value;
    };
    /**
     * Gets the msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic property value. 
     * @returns a msdyn_rolecompetencyrequirement
     */
    public get msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic() {
        return this._msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic;
    };
    /**
     * Sets the msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic property value. 
     * @param value Value to set for the msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic property.
     */
    public set msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic(value: Msdyn_rolecompetencyrequirement[] | undefined) {
        this._msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic = value;
    };
    /**
     * Gets the msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @returns a msdyn_rulesetdependencymapping
     */
    public get msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid() {
        return this._msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid;
    };
    /**
     * Sets the msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @param value Value to set for the msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property.
     */
    public set msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid(value: Msdyn_rulesetdependencymapping[] | undefined) {
        this._msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = value;
    };
    /**
     * Gets the msdyn_characteristic_msdyn_workordercharacteristic_Characteristic property value. 
     * @returns a msdyn_workordercharacteristic
     */
    public get msdyn_characteristic_msdyn_workordercharacteristic_Characteristic() {
        return this._msdyn_characteristic_msdyn_workordercharacteristic_Characteristic;
    };
    /**
     * Sets the msdyn_characteristic_msdyn_workordercharacteristic_Characteristic property value. 
     * @param value Value to set for the msdyn_characteristic_msdyn_workordercharacteristic_Characteristic property.
     */
    public set msdyn_characteristic_msdyn_workordercharacteristic_Characteristic(value: Msdyn_workordercharacteristic[] | undefined) {
        this._msdyn_characteristic_msdyn_workordercharacteristic_Characteristic = value;
    };
    /**
     * Gets the msdyn_characteristic_skillattachmenttarget property value. 
     * @returns a msdyn_skillattachmenttarget
     */
    public get msdyn_characteristic_skillattachmenttarget() {
        return this._msdyn_characteristic_skillattachmenttarget;
    };
    /**
     * Sets the msdyn_characteristic_skillattachmenttarget property value. 
     * @param value Value to set for the msdyn_characteristic_skillattachmenttarget property.
     */
    public set msdyn_characteristic_skillattachmenttarget(value: Msdyn_skillattachmenttarget[] | undefined) {
        this._msdyn_characteristic_skillattachmenttarget = value;
    };
    /**
     * Gets the msdyn_ocsitdskill_skillid_Characteristic property value. 
     * @returns a msdyn_ocsitdskill
     */
    public get msdyn_ocsitdskill_skillid_Characteristic() {
        return this._msdyn_ocsitdskill_skillid_Characteristic;
    };
    /**
     * Sets the msdyn_ocsitdskill_skillid_Characteristic property value. 
     * @param value Value to set for the msdyn_ocsitdskill_skillid_Characteristic property.
     */
    public set msdyn_ocsitdskill_skillid_Characteristic(value: Msdyn_ocsitdskill[] | undefined) {
        this._msdyn_ocsitdskill_skillid_Characteristic = value;
    };
    /**
     * Gets the msdyn_requireapproval property value. 
     * @returns a boolean
     */
    public get msdyn_requireapproval() {
        return this._msdyn_requireapproval;
    };
    /**
     * Sets the msdyn_requireapproval property value. 
     * @param value Value to set for the msdyn_requireapproval property.
     */
    public set msdyn_requireapproval(value: boolean | undefined) {
        this._msdyn_requireapproval = value;
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
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Asyncoperation>("characteristic_AsyncOperations", this.characteristic_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bookableresourcecharacteristic>("characteristic_bookableresourcecharacteristic_Characteristic", this.characteristic_bookableresourcecharacteristic_Characteristic);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("characteristic_BulkDeleteFailures", this.characteristic_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("characteristic_DuplicateBaseRecord", this.characteristic_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("characteristic_DuplicateMatchingRecord", this.characteristic_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("characteristic_MailboxTrackingFolders", this.characteristic_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("characteristic_PrincipalObjectAttributeAccesses", this.characteristic_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("characteristic_ProcessSession", this.characteristic_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("characteristic_SyncErrors", this.characteristic_SyncErrors);
        writer.writeStringValue("characteristicid", this.characteristicid);
        writer.writeNumberValue("characteristictype", this.characteristictype);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeCollectionOfObjectValues<Msdyn_characteristicreqforteammember>("msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic", this.msdyn_characteristic_msdyn_characteristicreqforteammember_characteristic);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttypecharacteristic>("msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic", this.msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitemcharacteristic>("msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic", this.msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic);
        writer.writeCollectionOfObjectValues<Msdyn_requirementcharacteristic>("msdyn_characteristic_msdyn_requirementcharacteristic_characteristic", this.msdyn_characteristic_msdyn_requirementcharacteristic_characteristic);
        writer.writeCollectionOfObjectValues<Msdyn_rolecompetencyrequirement>("msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic", this.msdyn_characteristic_msdyn_rolecompetencyrequirement_characteristic);
        writer.writeCollectionOfObjectValues<Msdyn_rulesetdependencymapping>("msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid", this.msdyn_characteristic_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid);
        writer.writeCollectionOfObjectValues<Msdyn_workordercharacteristic>("msdyn_characteristic_msdyn_workordercharacteristic_Characteristic", this.msdyn_characteristic_msdyn_workordercharacteristic_Characteristic);
        writer.writeCollectionOfObjectValues<Msdyn_skillattachmenttarget>("msdyn_characteristic_skillattachmenttarget", this.msdyn_characteristic_skillattachmenttarget);
        writer.writeCollectionOfObjectValues<Msdyn_ocsitdskill>("msdyn_ocsitdskill_skillid_Characteristic", this.msdyn_ocsitdskill_skillid_Characteristic);
        writer.writeBooleanValue("msdyn_requireapproval", this.msdyn_requireapproval);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
