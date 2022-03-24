import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createColumnmappingFromDiscriminatorValue} from './createColumnmappingFromDiscriminatorValue';
import {createImportentitymappingFromDiscriminatorValue} from './createImportentitymappingFromDiscriminatorValue';
import {createImportfileFromDiscriminatorValue} from './createImportfileFromDiscriminatorValue';
import {createOwnermappingFromDiscriminatorValue} from './createOwnermappingFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransformationmappingFromDiscriminatorValue} from './createTransformationmappingFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Columnmapping, Crmbaseentity, Importentitymapping, Importfile, Ownermapping, Principal, Syncerror, Systemuser, Team, Transformationmapping} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Importmap extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _columnMapping_ImportMap?: Columnmapping[] | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _entitiesperfile?: number | undefined;
    private _importEntityMapping_ImportMap?: Importentitymapping[] | undefined;
    private _importMap_AsyncOperations?: Asyncoperation[] | undefined;
    private _importMap_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _importMap_ImportFile?: Importfile[] | undefined;
    private _importMap_SyncErrors?: Syncerror[] | undefined;
    private _importmapid?: string | undefined;
    private _importmapidunique?: string | undefined;
    private _importmaptype?: number | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _isvalidforimport?: boolean | undefined;
    private _iswizardcreated?: boolean | undefined;
    private _mapcustomizations?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _ownerMapping_ImportMap?: Ownermapping[] | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _solutionid?: string | undefined;
    private _source?: string | undefined;
    private _sourcetype?: number | undefined;
    private _sourceuseridentifierforsourcecrmuserlink?: string | undefined;
    private _sourceuseridentifierforsourcedatasourceuserlink?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _targetentity?: number | undefined;
    private _targetuseridentifierforsourcecrmuserlink?: string | undefined;
    private _transformationMapping_ImportMap?: Transformationmapping[] | undefined;
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
     * Gets the columnMapping_ImportMap property value. 
     * @returns a columnmapping
     */
    public get columnMapping_ImportMap() {
        return this._columnMapping_ImportMap;
    };
    /**
     * Sets the columnMapping_ImportMap property value. 
     * @param value Value to set for the ColumnMapping_ImportMap property.
     */
    public set columnMapping_ImportMap(value: Columnmapping[] | undefined) {
        this._columnMapping_ImportMap = value;
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
     * Instantiates a new importmap and sets the default values.
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
     * Gets the entitiesperfile property value. 
     * @returns a integer
     */
    public get entitiesperfile() {
        return this._entitiesperfile;
    };
    /**
     * Sets the entitiesperfile property value. 
     * @param value Value to set for the entitiesperfile property.
     */
    public set entitiesperfile(value: number | undefined) {
        this._entitiesperfile = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Importmap)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Importmap)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Importmap)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Importmap)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Importmap)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Importmap)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Importmap)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Importmap)._owninguser_value = n.getStringValue(); },
            "columnMapping_ImportMap": (o, n) => { (o as unknown as Importmap).columnMapping_ImportMap = n.getCollectionOfObjectValues<Columnmapping>(createColumnmappingFromDiscriminatorValue); },
            "componentstate": (o, n) => { (o as unknown as Importmap).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Importmap).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Importmap).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Importmap).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Importmap).description = n.getStringValue(); },
            "entitiesperfile": (o, n) => { (o as unknown as Importmap).entitiesperfile = n.getNumberValue(); },
            "importEntityMapping_ImportMap": (o, n) => { (o as unknown as Importmap).importEntityMapping_ImportMap = n.getCollectionOfObjectValues<Importentitymapping>(createImportentitymappingFromDiscriminatorValue); },
            "importMap_AsyncOperations": (o, n) => { (o as unknown as Importmap).importMap_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "importMap_BulkDeleteFailures": (o, n) => { (o as unknown as Importmap).importMap_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "importMap_ImportFile": (o, n) => { (o as unknown as Importmap).importMap_ImportFile = n.getCollectionOfObjectValues<Importfile>(createImportfileFromDiscriminatorValue); },
            "importMap_SyncErrors": (o, n) => { (o as unknown as Importmap).importMap_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "importmapid": (o, n) => { (o as unknown as Importmap).importmapid = n.getStringValue(); },
            "importmapidunique": (o, n) => { (o as unknown as Importmap).importmapidunique = n.getStringValue(); },
            "importmaptype": (o, n) => { (o as unknown as Importmap).importmaptype = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Importmap).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Importmap).ismanaged = n.getBooleanValue(); },
            "isvalidforimport": (o, n) => { (o as unknown as Importmap).isvalidforimport = n.getBooleanValue(); },
            "iswizardcreated": (o, n) => { (o as unknown as Importmap).iswizardcreated = n.getBooleanValue(); },
            "mapcustomizations": (o, n) => { (o as unknown as Importmap).mapcustomizations = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Importmap).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Importmap).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Importmap).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Importmap).name = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Importmap).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Importmap).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "ownerMapping_ImportMap": (o, n) => { (o as unknown as Importmap).ownerMapping_ImportMap = n.getCollectionOfObjectValues<Ownermapping>(createOwnermappingFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Importmap).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Importmap).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Importmap).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Importmap).solutionid = n.getStringValue(); },
            "source": (o, n) => { (o as unknown as Importmap).source = n.getStringValue(); },
            "sourcetype": (o, n) => { (o as unknown as Importmap).sourcetype = n.getNumberValue(); },
            "sourceuseridentifierforsourcecrmuserlink": (o, n) => { (o as unknown as Importmap).sourceuseridentifierforsourcecrmuserlink = n.getStringValue(); },
            "sourceuseridentifierforsourcedatasourceuserlink": (o, n) => { (o as unknown as Importmap).sourceuseridentifierforsourcedatasourceuserlink = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Importmap).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Importmap).statuscode = n.getNumberValue(); },
            "targetentity": (o, n) => { (o as unknown as Importmap).targetentity = n.getNumberValue(); },
            "targetuseridentifierforsourcecrmuserlink": (o, n) => { (o as unknown as Importmap).targetuseridentifierforsourcecrmuserlink = n.getStringValue(); },
            "transformationMapping_ImportMap": (o, n) => { (o as unknown as Importmap).transformationMapping_ImportMap = n.getCollectionOfObjectValues<Transformationmapping>(createTransformationmappingFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the importEntityMapping_ImportMap property value. 
     * @returns a importentitymapping
     */
    public get importEntityMapping_ImportMap() {
        return this._importEntityMapping_ImportMap;
    };
    /**
     * Sets the importEntityMapping_ImportMap property value. 
     * @param value Value to set for the ImportEntityMapping_ImportMap property.
     */
    public set importEntityMapping_ImportMap(value: Importentitymapping[] | undefined) {
        this._importEntityMapping_ImportMap = value;
    };
    /**
     * Gets the importMap_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get importMap_AsyncOperations() {
        return this._importMap_AsyncOperations;
    };
    /**
     * Sets the importMap_AsyncOperations property value. 
     * @param value Value to set for the ImportMap_AsyncOperations property.
     */
    public set importMap_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._importMap_AsyncOperations = value;
    };
    /**
     * Gets the importMap_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get importMap_BulkDeleteFailures() {
        return this._importMap_BulkDeleteFailures;
    };
    /**
     * Sets the importMap_BulkDeleteFailures property value. 
     * @param value Value to set for the ImportMap_BulkDeleteFailures property.
     */
    public set importMap_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._importMap_BulkDeleteFailures = value;
    };
    /**
     * Gets the importMap_ImportFile property value. 
     * @returns a importfile
     */
    public get importMap_ImportFile() {
        return this._importMap_ImportFile;
    };
    /**
     * Sets the importMap_ImportFile property value. 
     * @param value Value to set for the ImportMap_ImportFile property.
     */
    public set importMap_ImportFile(value: Importfile[] | undefined) {
        this._importMap_ImportFile = value;
    };
    /**
     * Gets the importMap_SyncErrors property value. 
     * @returns a syncerror
     */
    public get importMap_SyncErrors() {
        return this._importMap_SyncErrors;
    };
    /**
     * Sets the importMap_SyncErrors property value. 
     * @param value Value to set for the ImportMap_SyncErrors property.
     */
    public set importMap_SyncErrors(value: Syncerror[] | undefined) {
        this._importMap_SyncErrors = value;
    };
    /**
     * Gets the importmapid property value. 
     * @returns a string
     */
    public get importmapid() {
        return this._importmapid;
    };
    /**
     * Sets the importmapid property value. 
     * @param value Value to set for the importmapid property.
     */
    public set importmapid(value: string | undefined) {
        this._importmapid = value;
    };
    /**
     * Gets the importmapidunique property value. 
     * @returns a string
     */
    public get importmapidunique() {
        return this._importmapidunique;
    };
    /**
     * Sets the importmapidunique property value. 
     * @param value Value to set for the importmapidunique property.
     */
    public set importmapidunique(value: string | undefined) {
        this._importmapidunique = value;
    };
    /**
     * Gets the importmaptype property value. 
     * @returns a integer
     */
    public get importmaptype() {
        return this._importmaptype;
    };
    /**
     * Sets the importmaptype property value. 
     * @param value Value to set for the importmaptype property.
     */
    public set importmaptype(value: number | undefined) {
        this._importmaptype = value;
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
     * Gets the isvalidforimport property value. 
     * @returns a boolean
     */
    public get isvalidforimport() {
        return this._isvalidforimport;
    };
    /**
     * Sets the isvalidforimport property value. 
     * @param value Value to set for the isvalidforimport property.
     */
    public set isvalidforimport(value: boolean | undefined) {
        this._isvalidforimport = value;
    };
    /**
     * Gets the iswizardcreated property value. 
     * @returns a boolean
     */
    public get iswizardcreated() {
        return this._iswizardcreated;
    };
    /**
     * Sets the iswizardcreated property value. 
     * @param value Value to set for the iswizardcreated property.
     */
    public set iswizardcreated(value: boolean | undefined) {
        this._iswizardcreated = value;
    };
    /**
     * Gets the mapcustomizations property value. 
     * @returns a string
     */
    public get mapcustomizations() {
        return this._mapcustomizations;
    };
    /**
     * Sets the mapcustomizations property value. 
     * @param value Value to set for the mapcustomizations property.
     */
    public set mapcustomizations(value: string | undefined) {
        this._mapcustomizations = value;
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
     * Gets the ownerMapping_ImportMap property value. 
     * @returns a ownermapping
     */
    public get ownerMapping_ImportMap() {
        return this._ownerMapping_ImportMap;
    };
    /**
     * Sets the ownerMapping_ImportMap property value. 
     * @param value Value to set for the OwnerMapping_ImportMap property.
     */
    public set ownerMapping_ImportMap(value: Ownermapping[] | undefined) {
        this._ownerMapping_ImportMap = value;
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
        writer.writeCollectionOfObjectValues<Columnmapping>("columnMapping_ImportMap", this.columnMapping_ImportMap);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("entitiesperfile", this.entitiesperfile);
        writer.writeCollectionOfObjectValues<Importentitymapping>("importEntityMapping_ImportMap", this.importEntityMapping_ImportMap);
        writer.writeCollectionOfObjectValues<Asyncoperation>("importMap_AsyncOperations", this.importMap_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("importMap_BulkDeleteFailures", this.importMap_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Importfile>("importMap_ImportFile", this.importMap_ImportFile);
        writer.writeCollectionOfObjectValues<Syncerror>("importMap_SyncErrors", this.importMap_SyncErrors);
        writer.writeStringValue("importmapid", this.importmapid);
        writer.writeStringValue("importmapidunique", this.importmapidunique);
        writer.writeNumberValue("importmaptype", this.importmaptype);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isvalidforimport", this.isvalidforimport);
        writer.writeBooleanValue("iswizardcreated", this.iswizardcreated);
        writer.writeStringValue("mapcustomizations", this.mapcustomizations);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeCollectionOfObjectValues<Ownermapping>("ownerMapping_ImportMap", this.ownerMapping_ImportMap);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeStringValue("source", this.source);
        writer.writeNumberValue("sourcetype", this.sourcetype);
        writer.writeStringValue("sourceuseridentifierforsourcecrmuserlink", this.sourceuseridentifierforsourcecrmuserlink);
        writer.writeStringValue("sourceuseridentifierforsourcedatasourceuserlink", this.sourceuseridentifierforsourcedatasourceuserlink);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("targetentity", this.targetentity);
        writer.writeStringValue("targetuseridentifierforsourcecrmuserlink", this.targetuseridentifierforsourcecrmuserlink);
        writer.writeCollectionOfObjectValues<Transformationmapping>("transformationMapping_ImportMap", this.transformationMapping_ImportMap);
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
     * Gets the source property value. 
     * @returns a string
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. 
     * @param value Value to set for the source property.
     */
    public set source(value: string | undefined) {
        this._source = value;
    };
    /**
     * Gets the sourcetype property value. 
     * @returns a integer
     */
    public get sourcetype() {
        return this._sourcetype;
    };
    /**
     * Sets the sourcetype property value. 
     * @param value Value to set for the sourcetype property.
     */
    public set sourcetype(value: number | undefined) {
        this._sourcetype = value;
    };
    /**
     * Gets the sourceuseridentifierforsourcecrmuserlink property value. 
     * @returns a string
     */
    public get sourceuseridentifierforsourcecrmuserlink() {
        return this._sourceuseridentifierforsourcecrmuserlink;
    };
    /**
     * Sets the sourceuseridentifierforsourcecrmuserlink property value. 
     * @param value Value to set for the sourceuseridentifierforsourcecrmuserlink property.
     */
    public set sourceuseridentifierforsourcecrmuserlink(value: string | undefined) {
        this._sourceuseridentifierforsourcecrmuserlink = value;
    };
    /**
     * Gets the sourceuseridentifierforsourcedatasourceuserlink property value. 
     * @returns a string
     */
    public get sourceuseridentifierforsourcedatasourceuserlink() {
        return this._sourceuseridentifierforsourcedatasourceuserlink;
    };
    /**
     * Sets the sourceuseridentifierforsourcedatasourceuserlink property value. 
     * @param value Value to set for the sourceuseridentifierforsourcedatasourceuserlink property.
     */
    public set sourceuseridentifierforsourcedatasourceuserlink(value: string | undefined) {
        this._sourceuseridentifierforsourcedatasourceuserlink = value;
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
     * Gets the targetentity property value. 
     * @returns a integer
     */
    public get targetentity() {
        return this._targetentity;
    };
    /**
     * Sets the targetentity property value. 
     * @param value Value to set for the targetentity property.
     */
    public set targetentity(value: number | undefined) {
        this._targetentity = value;
    };
    /**
     * Gets the targetuseridentifierforsourcecrmuserlink property value. 
     * @returns a string
     */
    public get targetuseridentifierforsourcecrmuserlink() {
        return this._targetuseridentifierforsourcecrmuserlink;
    };
    /**
     * Sets the targetuseridentifierforsourcecrmuserlink property value. 
     * @param value Value to set for the targetuseridentifierforsourcecrmuserlink property.
     */
    public set targetuseridentifierforsourcecrmuserlink(value: string | undefined) {
        this._targetuseridentifierforsourcecrmuserlink = value;
    };
    /**
     * Gets the transformationMapping_ImportMap property value. 
     * @returns a transformationmapping
     */
    public get transformationMapping_ImportMap() {
        return this._transformationMapping_ImportMap;
    };
    /**
     * Sets the transformationMapping_ImportMap property value. 
     * @param value Value to set for the TransformationMapping_ImportMap property.
     */
    public set transformationMapping_ImportMap(value: Transformationmapping[] | undefined) {
        this._transformationMapping_ImportMap = value;
    };
}
