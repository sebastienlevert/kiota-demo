import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecharacteristicFromDiscriminatorValue} from './createBookableresourcecharacteristicFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_characteristicreqforteammemberFromDiscriminatorValue} from './createMsdyn_characteristicreqforteammemberFromDiscriminatorValue';
import {createMsdyn_incidenttypecharacteristicFromDiscriminatorValue} from './createMsdyn_incidenttypecharacteristicFromDiscriminatorValue';
import {createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue} from './createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue';
import {createMsdyn_requirementcharacteristicFromDiscriminatorValue} from './createMsdyn_requirementcharacteristicFromDiscriminatorValue';
import {createMsdyn_rolecompetencyrequirementFromDiscriminatorValue} from './createMsdyn_rolecompetencyrequirementFromDiscriminatorValue';
import {createMsdyn_rulesetdependencymappingFromDiscriminatorValue} from './createMsdyn_rulesetdependencymappingFromDiscriminatorValue';
import {createMsdyn_skillattachmenttargetFromDiscriminatorValue} from './createMsdyn_skillattachmenttargetFromDiscriminatorValue';
import {createMsdyn_workordercharacteristicFromDiscriminatorValue} from './createMsdyn_workordercharacteristicFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createRatingmodelFromDiscriminatorValue} from './createRatingmodelFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bookableresourcecharacteristic, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_characteristicreqforteammember, Msdyn_incidenttypecharacteristic, Msdyn_ocliveworkitemcharacteristic, Msdyn_requirementcharacteristic, Msdyn_rolecompetencyrequirement, Msdyn_rulesetdependencymapping, Msdyn_skillattachmenttarget, Msdyn_workordercharacteristic, Principal, Principalobjectattributeaccess, Processsession, Ratingmodel, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Ratingvalue extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __ratingmodel_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _msdyn_isdefault?: boolean | undefined;
    private _msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue?: Msdyn_characteristicreqforteammember[] | undefined;
    private _msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue?: Msdyn_incidenttypecharacteristic[] | undefined;
    private _msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue?: Msdyn_ocliveworkitemcharacteristic[] | undefined;
    private _msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue?: Msdyn_requirementcharacteristic[] | undefined;
    private _msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue?: Msdyn_rolecompetencyrequirement[] | undefined;
    private _msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: Msdyn_rulesetdependencymapping[] | undefined;
    private _msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue?: Msdyn_workordercharacteristic[] | undefined;
    private _msdyn_ratingvalue_skillattachmenttarget?: Msdyn_skillattachmenttarget[] | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _ratingModel?: Ratingmodel | undefined;
    private _ratingvalue_AsyncOperations?: Asyncoperation[] | undefined;
    private _ratingvalue_bookableresourcecharacteristic_RatingValue?: Bookableresourcecharacteristic[] | undefined;
    private _ratingvalue_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _ratingvalue_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _ratingvalue_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _ratingvalue_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _ratingvalue_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _ratingvalue_ProcessSession?: Processsession[] | undefined;
    private _ratingValue_SyncErrors?: Syncerror[] | undefined;
    private _ratingvalueid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _value?: number | undefined;
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
     * Gets the _ratingmodel_value property value. 
     * @returns a string
     */
    public get _ratingmodel_value() {
        return this.__ratingmodel_value;
    };
    /**
     * Sets the _ratingmodel_value property value. 
     * @param value Value to set for the _ratingmodel_value property.
     */
    public set _ratingmodel_value(value: string | undefined) {
        this.__ratingmodel_value = value;
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
     * Instantiates a new ratingvalue and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Ratingvalue)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Ratingvalue)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Ratingvalue)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Ratingvalue)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Ratingvalue)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Ratingvalue)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Ratingvalue)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Ratingvalue)._owninguser_value = n.getStringValue(); },
            "_ratingmodel_value": (o, n) => { (o as unknown as Ratingvalue)._ratingmodel_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Ratingvalue)._transactioncurrencyid_value = n.getStringValue(); },
            "createdbyname": (o, n) => { (o as unknown as Ratingvalue).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Ratingvalue).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Ratingvalue).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Ratingvalue).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Ratingvalue).importsequencenumber = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Ratingvalue).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Ratingvalue).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Ratingvalue).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_isdefault": (o, n) => { (o as unknown as Ratingvalue).msdyn_isdefault = n.getBooleanValue(); },
            "msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue": (o, n) => { (o as unknown as Ratingvalue).msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue = n.getCollectionOfObjectValues<Msdyn_characteristicreqforteammember>(createMsdyn_characteristicreqforteammemberFromDiscriminatorValue); },
            "msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue": (o, n) => { (o as unknown as Ratingvalue).msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue = n.getCollectionOfObjectValues<Msdyn_incidenttypecharacteristic>(createMsdyn_incidenttypecharacteristicFromDiscriminatorValue); },
            "msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue": (o, n) => { (o as unknown as Ratingvalue).msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue = n.getCollectionOfObjectValues<Msdyn_ocliveworkitemcharacteristic>(createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue); },
            "msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue": (o, n) => { (o as unknown as Ratingvalue).msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue = n.getCollectionOfObjectValues<Msdyn_requirementcharacteristic>(createMsdyn_requirementcharacteristicFromDiscriminatorValue); },
            "msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue": (o, n) => { (o as unknown as Ratingvalue).msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue = n.getCollectionOfObjectValues<Msdyn_rolecompetencyrequirement>(createMsdyn_rolecompetencyrequirementFromDiscriminatorValue); },
            "msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid": (o, n) => { (o as unknown as Ratingvalue).msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = n.getCollectionOfObjectValues<Msdyn_rulesetdependencymapping>(createMsdyn_rulesetdependencymappingFromDiscriminatorValue); },
            "msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue": (o, n) => { (o as unknown as Ratingvalue).msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue = n.getCollectionOfObjectValues<Msdyn_workordercharacteristic>(createMsdyn_workordercharacteristicFromDiscriminatorValue); },
            "msdyn_ratingvalue_skillattachmenttarget": (o, n) => { (o as unknown as Ratingvalue).msdyn_ratingvalue_skillattachmenttarget = n.getCollectionOfObjectValues<Msdyn_skillattachmenttarget>(createMsdyn_skillattachmenttargetFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Ratingvalue).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Ratingvalue).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Ratingvalue).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Ratingvalue).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Ratingvalue).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Ratingvalue).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "ratingModel": (o, n) => { (o as unknown as Ratingvalue).ratingModel = n.getObjectValue<Ratingmodel>(createRatingmodelFromDiscriminatorValue); },
            "ratingvalue_AsyncOperations": (o, n) => { (o as unknown as Ratingvalue).ratingvalue_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "ratingvalue_bookableresourcecharacteristic_RatingValue": (o, n) => { (o as unknown as Ratingvalue).ratingvalue_bookableresourcecharacteristic_RatingValue = n.getCollectionOfObjectValues<Bookableresourcecharacteristic>(createBookableresourcecharacteristicFromDiscriminatorValue); },
            "ratingvalue_BulkDeleteFailures": (o, n) => { (o as unknown as Ratingvalue).ratingvalue_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "ratingvalue_DuplicateBaseRecord": (o, n) => { (o as unknown as Ratingvalue).ratingvalue_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "ratingvalue_DuplicateMatchingRecord": (o, n) => { (o as unknown as Ratingvalue).ratingvalue_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "ratingvalue_MailboxTrackingFolders": (o, n) => { (o as unknown as Ratingvalue).ratingvalue_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "ratingvalue_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Ratingvalue).ratingvalue_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "ratingvalue_ProcessSession": (o, n) => { (o as unknown as Ratingvalue).ratingvalue_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "ratingValue_SyncErrors": (o, n) => { (o as unknown as Ratingvalue).ratingValue_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "ratingvalueid": (o, n) => { (o as unknown as Ratingvalue).ratingvalueid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Ratingvalue).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Ratingvalue).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Ratingvalue).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Ratingvalue).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Ratingvalue).utcconversiontimezonecode = n.getNumberValue(); },
            "value": (o, n) => { (o as unknown as Ratingvalue).value = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Ratingvalue).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_isdefault property value. 
     * @returns a boolean
     */
    public get msdyn_isdefault() {
        return this._msdyn_isdefault;
    };
    /**
     * Sets the msdyn_isdefault property value. 
     * @param value Value to set for the msdyn_isdefault property.
     */
    public set msdyn_isdefault(value: boolean | undefined) {
        this._msdyn_isdefault = value;
    };
    /**
     * Gets the msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue property value. 
     * @returns a msdyn_characteristicreqforteammember
     */
    public get msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue() {
        return this._msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue;
    };
    /**
     * Sets the msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue property value. 
     * @param value Value to set for the msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue property.
     */
    public set msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue(value: Msdyn_characteristicreqforteammember[] | undefined) {
        this._msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue = value;
    };
    /**
     * Gets the msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue property value. 
     * @returns a msdyn_incidenttypecharacteristic
     */
    public get msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue() {
        return this._msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue;
    };
    /**
     * Sets the msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue property value. 
     * @param value Value to set for the msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue property.
     */
    public set msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue(value: Msdyn_incidenttypecharacteristic[] | undefined) {
        this._msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue = value;
    };
    /**
     * Gets the msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue property value. 
     * @returns a msdyn_ocliveworkitemcharacteristic
     */
    public get msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue() {
        return this._msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue;
    };
    /**
     * Sets the msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue property value. 
     * @param value Value to set for the msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue property.
     */
    public set msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue(value: Msdyn_ocliveworkitemcharacteristic[] | undefined) {
        this._msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue = value;
    };
    /**
     * Gets the msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue property value. 
     * @returns a msdyn_requirementcharacteristic
     */
    public get msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue() {
        return this._msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue;
    };
    /**
     * Sets the msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue property value. 
     * @param value Value to set for the msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue property.
     */
    public set msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue(value: Msdyn_requirementcharacteristic[] | undefined) {
        this._msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue = value;
    };
    /**
     * Gets the msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue property value. 
     * @returns a msdyn_rolecompetencyrequirement
     */
    public get msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue() {
        return this._msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue;
    };
    /**
     * Sets the msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue property value. 
     * @param value Value to set for the msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue property.
     */
    public set msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue(value: Msdyn_rolecompetencyrequirement[] | undefined) {
        this._msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue = value;
    };
    /**
     * Gets the msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @returns a msdyn_rulesetdependencymapping
     */
    public get msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid() {
        return this._msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid;
    };
    /**
     * Sets the msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property value. 
     * @param value Value to set for the msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid property.
     */
    public set msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid(value: Msdyn_rulesetdependencymapping[] | undefined) {
        this._msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid = value;
    };
    /**
     * Gets the msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue property value. 
     * @returns a msdyn_workordercharacteristic
     */
    public get msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue() {
        return this._msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue;
    };
    /**
     * Sets the msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue property value. 
     * @param value Value to set for the msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue property.
     */
    public set msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue(value: Msdyn_workordercharacteristic[] | undefined) {
        this._msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue = value;
    };
    /**
     * Gets the msdyn_ratingvalue_skillattachmenttarget property value. 
     * @returns a msdyn_skillattachmenttarget
     */
    public get msdyn_ratingvalue_skillattachmenttarget() {
        return this._msdyn_ratingvalue_skillattachmenttarget;
    };
    /**
     * Sets the msdyn_ratingvalue_skillattachmenttarget property value. 
     * @param value Value to set for the msdyn_ratingvalue_skillattachmenttarget property.
     */
    public set msdyn_ratingvalue_skillattachmenttarget(value: Msdyn_skillattachmenttarget[] | undefined) {
        this._msdyn_ratingvalue_skillattachmenttarget = value;
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
     * Gets the ratingModel property value. 
     * @returns a ratingmodel
     */
    public get ratingModel() {
        return this._ratingModel;
    };
    /**
     * Sets the ratingModel property value. 
     * @param value Value to set for the RatingModel property.
     */
    public set ratingModel(value: Ratingmodel | undefined) {
        this._ratingModel = value;
    };
    /**
     * Gets the ratingvalue_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get ratingvalue_AsyncOperations() {
        return this._ratingvalue_AsyncOperations;
    };
    /**
     * Sets the ratingvalue_AsyncOperations property value. 
     * @param value Value to set for the ratingvalue_AsyncOperations property.
     */
    public set ratingvalue_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._ratingvalue_AsyncOperations = value;
    };
    /**
     * Gets the ratingvalue_bookableresourcecharacteristic_RatingValue property value. 
     * @returns a bookableresourcecharacteristic
     */
    public get ratingvalue_bookableresourcecharacteristic_RatingValue() {
        return this._ratingvalue_bookableresourcecharacteristic_RatingValue;
    };
    /**
     * Sets the ratingvalue_bookableresourcecharacteristic_RatingValue property value. 
     * @param value Value to set for the ratingvalue_bookableresourcecharacteristic_RatingValue property.
     */
    public set ratingvalue_bookableresourcecharacteristic_RatingValue(value: Bookableresourcecharacteristic[] | undefined) {
        this._ratingvalue_bookableresourcecharacteristic_RatingValue = value;
    };
    /**
     * Gets the ratingvalue_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get ratingvalue_BulkDeleteFailures() {
        return this._ratingvalue_BulkDeleteFailures;
    };
    /**
     * Sets the ratingvalue_BulkDeleteFailures property value. 
     * @param value Value to set for the ratingvalue_BulkDeleteFailures property.
     */
    public set ratingvalue_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._ratingvalue_BulkDeleteFailures = value;
    };
    /**
     * Gets the ratingvalue_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get ratingvalue_DuplicateBaseRecord() {
        return this._ratingvalue_DuplicateBaseRecord;
    };
    /**
     * Sets the ratingvalue_DuplicateBaseRecord property value. 
     * @param value Value to set for the ratingvalue_DuplicateBaseRecord property.
     */
    public set ratingvalue_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._ratingvalue_DuplicateBaseRecord = value;
    };
    /**
     * Gets the ratingvalue_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get ratingvalue_DuplicateMatchingRecord() {
        return this._ratingvalue_DuplicateMatchingRecord;
    };
    /**
     * Sets the ratingvalue_DuplicateMatchingRecord property value. 
     * @param value Value to set for the ratingvalue_DuplicateMatchingRecord property.
     */
    public set ratingvalue_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._ratingvalue_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the ratingvalue_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get ratingvalue_MailboxTrackingFolders() {
        return this._ratingvalue_MailboxTrackingFolders;
    };
    /**
     * Sets the ratingvalue_MailboxTrackingFolders property value. 
     * @param value Value to set for the ratingvalue_MailboxTrackingFolders property.
     */
    public set ratingvalue_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._ratingvalue_MailboxTrackingFolders = value;
    };
    /**
     * Gets the ratingvalue_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get ratingvalue_PrincipalObjectAttributeAccesses() {
        return this._ratingvalue_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the ratingvalue_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the ratingvalue_PrincipalObjectAttributeAccesses property.
     */
    public set ratingvalue_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._ratingvalue_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the ratingvalue_ProcessSession property value. 
     * @returns a processsession
     */
    public get ratingvalue_ProcessSession() {
        return this._ratingvalue_ProcessSession;
    };
    /**
     * Sets the ratingvalue_ProcessSession property value. 
     * @param value Value to set for the ratingvalue_ProcessSession property.
     */
    public set ratingvalue_ProcessSession(value: Processsession[] | undefined) {
        this._ratingvalue_ProcessSession = value;
    };
    /**
     * Gets the ratingValue_SyncErrors property value. 
     * @returns a syncerror
     */
    public get ratingValue_SyncErrors() {
        return this._ratingValue_SyncErrors;
    };
    /**
     * Sets the ratingValue_SyncErrors property value. 
     * @param value Value to set for the RatingValue_SyncErrors property.
     */
    public set ratingValue_SyncErrors(value: Syncerror[] | undefined) {
        this._ratingValue_SyncErrors = value;
    };
    /**
     * Gets the ratingvalueid property value. 
     * @returns a string
     */
    public get ratingvalueid() {
        return this._ratingvalueid;
    };
    /**
     * Sets the ratingvalueid property value. 
     * @param value Value to set for the ratingvalueid property.
     */
    public set ratingvalueid(value: string | undefined) {
        this._ratingvalueid = value;
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
        writer.writeStringValue("_ratingmodel_value", this._ratingmodel_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeBooleanValue("msdyn_isdefault", this.msdyn_isdefault);
        writer.writeCollectionOfObjectValues<Msdyn_characteristicreqforteammember>("msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue", this.msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue);
        writer.writeCollectionOfObjectValues<Msdyn_incidenttypecharacteristic>("msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue", this.msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue);
        writer.writeCollectionOfObjectValues<Msdyn_ocliveworkitemcharacteristic>("msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue", this.msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue);
        writer.writeCollectionOfObjectValues<Msdyn_requirementcharacteristic>("msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue", this.msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue);
        writer.writeCollectionOfObjectValues<Msdyn_rolecompetencyrequirement>("msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue", this.msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue);
        writer.writeCollectionOfObjectValues<Msdyn_rulesetdependencymapping>("msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid", this.msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid);
        writer.writeCollectionOfObjectValues<Msdyn_workordercharacteristic>("msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue", this.msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue);
        writer.writeCollectionOfObjectValues<Msdyn_skillattachmenttarget>("msdyn_ratingvalue_skillattachmenttarget", this.msdyn_ratingvalue_skillattachmenttarget);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Ratingmodel>("ratingModel", this.ratingModel);
        writer.writeCollectionOfObjectValues<Asyncoperation>("ratingvalue_AsyncOperations", this.ratingvalue_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bookableresourcecharacteristic>("ratingvalue_bookableresourcecharacteristic_RatingValue", this.ratingvalue_bookableresourcecharacteristic_RatingValue);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("ratingvalue_BulkDeleteFailures", this.ratingvalue_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("ratingvalue_DuplicateBaseRecord", this.ratingvalue_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("ratingvalue_DuplicateMatchingRecord", this.ratingvalue_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("ratingvalue_MailboxTrackingFolders", this.ratingvalue_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("ratingvalue_PrincipalObjectAttributeAccesses", this.ratingvalue_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("ratingvalue_ProcessSession", this.ratingvalue_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("ratingValue_SyncErrors", this.ratingValue_SyncErrors);
        writer.writeStringValue("ratingvalueid", this.ratingvalueid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("value", this.value);
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
     * Gets the value property value. 
     * @returns a integer
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: number | undefined) {
        this._value = value;
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
